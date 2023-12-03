from flask import Flask, jsonify, request
from datetime import datetime, timedelta
import json

# locking mechanism using a file, with timeout


app = Flask(__name__)
lock_file_name = "lock.txt"


class FileLock:
    def __init__(self, lock_file_name, timeout=10):
        self.lock_file_name = lock_file_name
        self.timeout = timeout

    def acquire(self):
        existing_content = None
        try:
            with open(self.lock_file_name, "r") as f:
                existing_content = f.read()
        except FileNotFoundError:
            pass
        if existing_content is None:
            with open(self.lock_file_name, "w") as f:
                two_seconds_from_now = datetime.now() + timedelta(seconds=self.timeout)
                f.write(two_seconds_from_now.isoformat())
            return True
        else:
            if datetime.now() > datetime.fromisoformat(existing_content):
                with open(self.lock_file_name, "w") as f:
                    two_seconds_from_now = datetime.now() + timedelta(
                        seconds=self.timeout
                    )
                    f.write(two_seconds_from_now.isoformat())
                return True
            else:
                from time import sleep

                sleep(1)
                return self.acquire()

    def release(self):
        with open(self.lock_file_name, "w") as f:
            f.write("")
        return True

    def __enter__(self):
        self.acquire()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.release()
        return False


@app.route("/leaderboard", methods=["POST"])
def save_leaderboard():
    name = request.json.get("name")
    max_credit = request.json.get("max_credit")
    time_survived = request.json.get("time_survived")

    if name is None or max_credit is None or time_survived is None:
        return jsonify({"error": "Missing required fields"}), 400

    with FileLock(lock_file_name):
        try:
            with open("leaderboard.json", "r") as f:
                leaderboard = json.load(f)
        except FileNotFoundError:
            leaderboard = []
        leaderboard.append(
            {"name": name, "max_credit": max_credit, "time_survived": time_survived}
        )
        leaderboard.sort(key=lambda x: x["max_credit"], reverse=True)
        leaderboard.sort(key=lambda x: x["time_survived"], reverse=True)
        leaderboard = leaderboard[:10]
        with open("leaderboard.json", "w") as f:
            json.dump(leaderboard, f)

    return jsonify({"leaderboard": leaderboard}), 200


@app.route("/leaderboard", methods=["GET"])
def get_leaderboard():
    try:
        with open("leaderboard.json", "r") as f:
            leaderboard = json.load(f)
    except FileNotFoundError:
        leaderboard = []
    return jsonify({"leaderboard": leaderboard}), 200


if __name__ == "__main__":
    import os

    app.run(debug=os.environ.get("DEBUG", False), port=os.environ.get("PORT", 5000))

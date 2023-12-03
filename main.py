from flask import Flask, jsonify, request
from datetime import datetime, timedelta
import json


app = Flask(__name__)

@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
    return response

@app.route("/leaderboard", methods=["POST"])
def save_leaderboard():
    name = request.json.get("name")
    max_credit = request.json.get("max_credit")
    time_survived = request.json.get("time_survived")

    if name is None or max_credit is None or time_survived is None:
        return jsonify({"error": "Missing required fields"}), 400

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

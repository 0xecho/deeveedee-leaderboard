
# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Pipfile and Pipfile.lock to the working directory
COPY Pipfile Pipfile.lock ./

# Install Pipenv
RUN pip install pipenv

# Install the dependencies using Pipenv
RUN pipenv install --system --deploy --ignore-pipfile

# Copy the application code to the working directory
COPY . .

# Expose the port on which the Flask app will run
EXPOSE 5000

# Set the environment variable for Flask
ENV FLASK_APP=app.py

# Run the Flask app using Pipenv
CMD ["pipenv", "run", "flask", "run", "--host=0.0.0.0"]

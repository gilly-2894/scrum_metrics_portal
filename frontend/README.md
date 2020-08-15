# Prerequisite
Install MongoDB, and start it as a service: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

In the root of the project create a virtual environment for python for the api,
`cd /path-to-project/scrum-metrics-portal`
`python -m venv venv`

activate the virtual environment
`venv\Scripts\activate`

once you are inside the virtual environment you can install the required files:
`pip install flask`
`pip install flask_pymongo`
`pip install flask_cors`

then you have to start the run mongo.py file
`python mongo.py`

Next you will need to install all of the dependencies for Angular:
Go to root of the project, where the package.json is and type the following command.
`npm i`

When this finishes you can run the command `npm start` and this will start the application up and connect it to the flask api.

You can then fill in the form and submit and then check that it has persisted using the mongo shell.

From the command line type `mongo` to enter the mongo shell, switch to our database with the command: `use scrumMastersMetrics` and then you can list the records with `db.metrics.find().pretty()`


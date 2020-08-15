from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_cors import CORS 

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'scrumMastersMetrics'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/scrumMastersMetrics'

mongo = PyMongo(app)
CORS(app)

@app.route('/api/metrics', methods=['POST'])
def add_metrics():
    metrics = mongo.db.metrics
    metrics_id = metrics.insert(request.get_json())
    new_metric = metrics.find_one({'_id': metrics_id})

    result = {'scrumTeamName': new_metric['scrumTeamName']}
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
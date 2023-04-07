from flask import Flask, render_template, request, session, jsonify
from uuid import uuid4
import json
from flask_cors import CORS
from pymongo import MongoClient
import os
from bson import ObjectId
from bson import json_util

app = Flask("nullflix")
CORS(app)

database = MongoClient("mongodb://localhost:27017/")
db = database.nullflix


@app.route("/api/video_recommend/<wallet_id>", methods={"GET"})
def func(wallet_id):
    videos = db.videos.find()
    data = []
    # print(videos)
    for f in videos:
        data.append({
            "video_id": str(f['_id']),
            "title": f["title"],
            "desync_id": f["desync_id"]
        })
    print(data)
    return jsonify(data)


@app.route("/api/video_data/<video_id>", methods={"GET"})
def func2(video_id):
    f = db.videos.find_one({"_id": ObjectId(video_id)})
    data = {
        "video_id": str(f['_id']),
        "title": f["title"],
        "desync_id": f["desync_id"]
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run()

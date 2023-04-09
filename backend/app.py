import pickle
from flask import Flask, render_template, request, session, jsonify
from uuid import uuid4
import json
from flask_cors import CORS
from pymongo import MongoClient
import os
from bson import ObjectId
from bson import json_util
import pandas as pd
import requests
app = Flask("nullflix")
CORS(app)

database = MongoClient("mongodb://localhost:27017/")
db = database.nullflix

similarity = pickle.load(open("similarity.pkl", "rb"))
new = pd.read_csv('movies_data(cleaned).csv')

# for tit in new["title"]:
#     db.videos.insert_one(
#         {"title": tit.lower(), "desync_id":None })

# for k in db.videos.find():
#     if k["desync_id"] == None:
# print(k["title"])
# def get_video(data):


def fetch_poster(movie_id):
    url = "https://api.themoviedb.org/3/movie/{}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US".format(
        movie_id)
    data = requests.get(url)
    print(data)
    data = data.json()
    poster_path = data['poster_path']
    full_path = "https://image.tmdb.org/t/p/w500" + poster_path
    return full_path

@app.route("/<wallet>")
def test(wallet):
    print("loda")
    user = db.user.find_one({"wallet_id": wallet})

    generic = {}
    if user is None:
        db.user.insert_one({"wallet_id": wallet, "data": []})
        return jsonify(generic)

    recomendations = {
        "titles": [],
        "posters_url": [],
        "desync_ids": [],
    }
    # user.data
    for movie in user["data"]:
        print(movie)
        index = -2
        try:
            index = new[new['title'] == movie.lower()].index[0]
            distances = sorted(
                list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
            for gh in distances[1:4]:
                recomendations["titles"].append(new['title'][gh[0]])
                recomendations["posters_url"].append(
                    fetch_poster(new['movie_id'][gh[0]]))
                recomendations["desync_ids"].append(0)
        # print(index)
        except:
            pass
        print(index)
        # if index >= 0:
    return jsonify(recomendations)


@app.route("/api/video_recommend/<wallet>")
def func(wallet):
    print("loda")
    user = db.user.find_one({"wallet_id": wallet})

    generic = {}
    if user is None:
        db.user.insert_one({"wallet_id": wallet, "data": []})
        return jsonify(generic)

    recomendations = {
        "titles": [],
        "posters_url": [],
        "desync_ids": [],
    }
    # user.data
    for movie in user["data"]:
        print(movie)
        index = -2
        try:
            index = new[new['title'] == movie.lower()].index[0]
            distances = sorted(
                list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
            for gh in distances[1:4]:
                recomendations["titles"].append(new['title'][gh[0]])
                recomendations["posters_url"].append(
                    fetch_poster(new['movie_id'][gh[0]]))
                recomendations["desync_ids"].append(0)
        # print(index)
        except:
            pass
        print(index)
        # if index >= 0:
    return jsonify(recomendations)


# @app.route("/api/video_data/<video_id>", methods={"GET"})
# def func2(video_id):
#     f = db.videos.find_one({"_id": ObjectId(video_id)})
#     data = {
#         "video_id": str(f['_id']),
#         "title": f["title"],
#         "desync_id": f["desync_id"]
#     }
#     return jsonify(data)


if __name__ == '__main__':
    # print(similarity)
    # print(movie_list)
    app.run(debug=True)

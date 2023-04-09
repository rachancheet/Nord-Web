from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle
import pandas as pd


new = pd.read_csv('movies_data(cleaned).csv')
# print(type(new["tags"][0]))
cv = CountVectorizer(max_features=5000, stop_words='english')

vector = cv.fit_transform(new['tags'].values.astype('U')).toarray()

similarity = cosine_similarity(vector)
# print(similarity[0])


pickle.dump(similarity, open('similarity.pkl', 'wb'))

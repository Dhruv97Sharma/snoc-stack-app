from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from os import path
import pickle
import sklearn
from sklearn.model_selection import train_test_split # for splitting the dataset for training and testing
import numpy as np
import pandas as pd

from random import randrange

from models import NetworkData
from typing import List

bin_data = pd.read_csv('datasets/bin_data.csv')
bin_data.drop(bin_data.columns[0],axis=1,inplace=True)
X = bin_data.iloc[:,0:93].to_numpy() # dataset excluding target attribute (encoded, one-hot-encoded,original)
Y = bin_data['intrusion'] # target attribute
# splitting the dataset 75% for training and 25% testing
X_train, X_test, y_train, y_test = train_test_split(X,Y, test_size=0.25, random_state=42)

pkl_filename = "./models/knn_binary.pkl"
file = open(pkl_filename, 'rb')
knn_classifier = pickle.load(file)
print("Loaded model from disk")

app = FastAPI()

origins = [
    "http://192.168.1.47:3000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    random_index = randrange(X_test.shape[0]-1)
    print("random dataset index: ",random_index)
    nids_prediction = knn_classifier.predict(X_test[random_index:random_index+1])
    print("PREDICTION: ",nids_prediction)
    return {
        "message": "Hello World",
        "prediction": str(nids_prediction[0]),
    }

@app.post("/predict")
async def predict_network_intrusion(networkDataList: List[NetworkData]):
    print("network input: ",networkDataList)
    networkDataPackets = []
    for networkData in networkDataList:
        networkDataDict = networkData.dict()
        networkDataPackets.append(list(networkDataDict.values()))
    npa = np.asarray(networkDataPackets, dtype=np.float32)
    nids_prediction = knn_classifier.predict(npa)
    print("PREDICTION: ",nids_prediction)
    return {
        "network_instrusion_prediction": nids_prediction.tolist(),
    }


@app.get("/get-predictions")
async def get_dataset():
    random_index = randrange(X_test.shape[0]-21)
    print("random dataset index: ",random_index)
    test_numpy_arr = X_test[random_index:random_index+20]
    nids_prediction = knn_classifier.predict(test_numpy_arr)
    df = pd.DataFrame(data=test_numpy_arr,columns=bin_data.iloc[:,0:93].columns)
    df["intrusion"] = nids_prediction
    return {
        "message": "dataset",
        "data": df.to_json(orient='records'),
    }
# pylint: disable=missing-module-docstring,missing-class-docstring,missing-function-docstring

from datetime import datetime
import firebase_admin
from fastapi import FastAPI
from firebase_admin import credentials
from firebase_admin import firestore
from pydantic import BaseModel

# Use a service account
cred = credentials.Certificate("./serviceaccount.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()


# User model
class User(BaseModel):
    email: str
    password: str
    name: str
    birthdate: datetime
    goal: str
    bmi: float


# FastAPI app
app = FastAPI()


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/users/")
async def read_users():
    docs = db.collection("users").stream()
    res = []
    for doc in docs:
        res.append({"id": doc.id, **doc.to_dict()})
    return res


@app.get("/users/{user_id}")
async def read_user(user_id: str):
    doc = db.collection("users").document(user_id).get()
    if doc.exists:
        return {"id": doc.id, **doc.to_dict()}
    return {"message": "User not found"}


@app.post("/users/")
async def create_user(user: User):
    _, doc = db.collection("users").add(user.dict())
    return {"id": doc.id, **user.dict()}


# For admin
@app.put("/users/{user_id}")
async def edit_user(user_id: str, user: User):
    doc = db.collection("users").document(user_id).get()
    if doc.exists:
        _ = db.collection("users").document(user_id).set(user.dict())
        return {"id": user_id, **user.dict()}
    return {"message": "User not found"}


# For admin
@app.delete("/users/{user_id}")
async def delete_user(user_id: str):
    doc = db.collection("users").document(user_id).get()
    if doc.exists:
        db.collection("users").document(user_id).delete()
        return {"id": user_id, **doc.to_dict()}
    return {"message": "User not found"}

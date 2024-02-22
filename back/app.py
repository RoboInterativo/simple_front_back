from flask import Flask
import json

app = Flask(__name__)

@app.route("/")
def index():
    return "<p>Hello, World!</p>"

@app.route("/api/")
def api():
    a=[{ "id",1,
        "name":"Alex",
        "last_name":"Shilo",
        "salary": 50000},
        {  "id",2,
            "name":"Serg",
            "last_name":"Shilo",
            "salary": 10000},
        ]
    return a

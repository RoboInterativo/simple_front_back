from flask import Flask
import json
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index(name=None):
    return render_template('index.html', name=name)

@app.route("/api/")
def api():
    a=[{ "id":1,
        "name":"Alex",
        "last_name":"Shilo",
        "salary": 50000},
        {  "id":2,
            "name":"Serg",
            "last_name":"Shilo",
            "salary": 10000}
        ]
    return a

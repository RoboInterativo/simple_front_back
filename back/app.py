from flask import Flask
import json
from flask import render_template
import psycopg2

app = Flask(__name__)
# conn = psycopg2.connect(dbname="demo", user="airfllow", password="airflow", host="188.120.243.218", port="5432")
# print("Подключение установлено")
# conn.close()
@app.route("/")
def index(name=None):
    return render_template('index.html', name=name)

@app.route("/api", methods=['GET', 'POST'])
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

app.run()

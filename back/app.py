from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "<p>Hello, World!</p>"

@app.route("/api/")
def api():
    return "<p>Hello, World!</p>"

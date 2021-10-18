#!C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Python 3.10/python

from flask import Flask, render_template
import sys
app = Flask(__name__)


@app.route("/")
def main():
    return render_template("main.html")


if __name__ == "__main__":
    app.run(host='192.168.200.182')
    
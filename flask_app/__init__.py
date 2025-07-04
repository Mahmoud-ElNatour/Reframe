from flask import Flask

app = Flask(__name__)
app.secret_key = 'change_me'

from . import routes

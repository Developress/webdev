from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

app = Flask(__name__)
CORS(app)

app.config.from_pyfile('instance/config.py')

# initialize the db
db.init_app(app)
# initialize the object for migrations
Migrate(app, db)



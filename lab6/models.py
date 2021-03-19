from app import db


class Player(db.Model):
    """
    Create a player table
    Fields:
        id: the unique identifier of the player, primary key
        first_name: the first name of the player
        last_name: the last name of the player
        gender: the gender of the player
        feedback: the feedback from the player
        age: the age range of the player
    """

    __tablename__ = 'players'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    gender = db.Column(db.String(6))
    feedback = db.Column(db.String(200))
    age = db.Column(db.String(6))

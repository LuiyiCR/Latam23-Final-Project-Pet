from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    name = db.Column(db.String(200), unique=False, nullable=False)
    password_hash = db.Column(db.String(300), unique=True, nullable=True)
    salt = db.Column(db.String(300), unique=True, nullable=True)
    user_type = db.Column(db.String(10), unique=False, nullable=False)


    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "type" : self.type
            # do not serialize the password, its a security breach
        }
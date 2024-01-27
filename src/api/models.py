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


class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    born_date = db.Column(db.Date, nullable=False)
    disabilities = db.Column(db.String(300), nullable=True)
    breed = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(100), nullable=False)
    animal = db.Column(db.String(200), nullable=False)
    medical_history = db.Column(db.String(300), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "born_date" : self.born_date,
            "disabilities": self.disabilities,
            "breed": self.breed,
            "gender": self.gender,
            "animal": self.animal,
            "medical_history": self.medical_history
        }
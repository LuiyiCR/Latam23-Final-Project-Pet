from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    name = db.Column(db.String(200), unique=False, nullable=False)
    password_hash = db.Column(db.String(300), unique=True, nullable=False)
    salt = db.Column(db.String(300), unique=True, nullable=False)
    user_type = db.Column(db.String(10), unique=False, nullable=False)
    pet = db.relationship("Pet", back_populates="user")
    patient_file = db.relationship("PatientFile", back_populates="user", lazy=True)
    veterinary = db.relationship("Veterinary", back_populates="user")
     
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "type" : self.type
        }

class Veterinary(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    phone = db.Column(db.String(20), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    country = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user = db.relationship("User", back_populates="veterinary")

    def serialize(self):
        return {
            "phone": self.phone,
            "address" : self.address,
            "country": self.country,
        }


class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user = db.relationship("User", back_populates="pet")
    name = db.Column(db.String(200), nullable=False)
    born_date = db.Column(db.Date, nullable=False)
    breed = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(100), nullable=False)
    animal = db.Column(db.String(200), nullable=False)
    photo = db.Column(db.String(300), nullable=True)
    patient_file = db.relationship("PatientFile", back_populates="pet", lazy=True)

    def serialize(self):
        return {
            "name": self.name,
            "born_date" : self.born_date,
            "breed": self.breed,
            "gender": self.gender,
            "animal": self.animal,
            "photo": self.photo
        }
    

class PatientFile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey("pet.id"), nullable=False)
    veterinary_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    owner_name = db.Column(db.String(200), nullable=False)
    owner_phone = db.Column(db.String(20), nullable=False)
    owner_email = db.Column(db.String(200), nullable=False)
    owner_address = db.Column(db.String(255), nullable=True)

    pet = db.relationship("Pet", back_populates="patient_file", lazy=True)
    user = db.relationship("User", back_populates="patient_file", lazy=True)

    def serialize(self):
        return {
            "owner_name": self.owner_name,
            "owner_email": self.owner_email,
            "owner_phone": self.owner_phone,
            "owner_address": self.owner_address
        }



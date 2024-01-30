"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pet
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from bcrypt import gensalt
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
import re

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/user', methods=['POST'])
def singup():
    if request.method == 'POST':
        data = request.json
        email = data.get("email")
        name =  data.get("name")
        user_type = data.get("user_type")
        password = data.get("password")
        if user_type != "veterinario" and user_type != "user":
            return jsonify({"message":"type invalid"}), 400
        verify_data = [email, name, password, user_type]
        email_patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if not re.match(email_patron, email):
            return jsonify({"message":"Email invalid"}),400
        if None in verify_data:
            return jsonify({"message":"All parameters are required"}), 400
        user_exist = User.query.filter_by(email = email).first()
        if user_exist:
            return jsonify({"message":"User all ready exist"}), 400
        salt = str(gensalt(), encoding = 'utf-8')
        password_and_salt = password + salt
        print(password_and_salt)
        password_hash = str(generate_password_hash(password_and_salt), encoding = 'utf-8')
        print(password_hash)
        new_user = User(name = name,user_type = user_type, email = email, password_hash = password_hash, salt = salt)
        try:
            db.session.add(new_user)
            db.session.commit()
            return jsonify({"message": f"User {email} register"}), 201
        except Exception as error:
            db.session.rollback()
            print(error)
            return jsonify ({"message": "Server error"}), 500

@api.route('/token', methods = ['POST'])
def login():
    if request.method == 'POST':
        data = request.json
        email = data.get("email")
        password = data.get("password")
        verify_data = [email, password]
        if None in verify_data:
            return jsonify({"message":"All parameters are required"}), 400
        email_patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if re.match(email_patron, email):
            return jsonify({"message":"Email invalid"}),400
        user_exist = User.query.filter_by(email=email).first()
        if user_exist is None:
            return jsonify({"message":"User not exist"}), 400
        password = password + user_exist.salt
        password_hash = user_exist.password_hash
        validation_password = check_password_hash(password_hash, password)
        try:
            if validation_password:
                token = create_access_token(identity= user_exist.id) 
                user_type = user_exist.user_type  
                return jsonify({"message":"Authentication successful",
                                "token": token,
                                "user_type" : user_type}), 201 
            else:
                return jsonify({"message":"Incorrect Pasword"}), 401  
        except Exception as error:
            db.session.rollback()
            print(error)
            return jsonify({"message": "Server error"}), 500 
            

@api.route('/user/<int:user_id>/pets', methods=['POST', 'GET'])
def handle_pets(user_id):

    # Verficiar si el usuario con esa id existe
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "No user found with that id"}), 404

    # POST
    if request.method == 'POST':
        data = request.json
        name = data.get("name")
        born_date = data.get("born_date")
        breed = data.get("breed")
        gender = data.get("gender")
        animal = data.get("animal")
        photo = data.get("photo")
        # Verificaciones
        verify_data = [name, born_date, breed, gender, animal]
        if None in verify_data:
            return jsonify({"message":"All parameters are required"}), 400
        # Creacion de la mascota
        new_pet = Pet(name = name, user_id = user_id, born_date = born_date, breed = breed, gender = gender, animal = animal, photo = photo)
        try:
            db.session.add(new_pet)
            db.session.commit()
            return jsonify({"message": "pet successfully registered"}), 201
        except Exception as error:
            db.session.rollback()
            return jsonify({"message": "Server error"}), 500
        
    # Get
    pet_list = [{"id": pet.id, "name": pet.name, "photo": pet.photo} for pet in user.pet]
    return jsonify({'Pets': pet_list})


@api.route('/user/<int:user_id>/pets/<int:pet_id>', methods=['GET', 'DELETE'])
def pet_properties(user_id, pet_id):

    # Verficiar si el usuario con esa id existe
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "No user found with that id"}), 404

    # Verificar si la mascota del usuario con esa id existe
    pet_properties = None
    for pet in user.pet:
        if pet.id == pet_id:
            pet_properties = pet
            break

    if pet_properties is None:
        return jsonify({"message": "Pet not found"})
    
    #GET
    if request.method == 'GET':
        return jsonify(pet_properties.serialize()), 200

    #DELETE
    try:
        db.session.delete(pet_properties)
        db.session.commit()
        
        return jsonify({
            "message": "Pet successfully deleted"
        }), 200
        
    except Exception as error:
        db.session.rollback()
        
        return jsonify({
            "message": "Something went wrong, try again later"
        }), 500
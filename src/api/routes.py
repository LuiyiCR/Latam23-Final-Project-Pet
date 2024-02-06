"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pet, Veterinary, PatientFile
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from bcrypt import gensalt
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
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
        if user_type != "veterinary" and user_type != "user":
            return jsonify({"message":"type invalid"}), 400
        verify_data = [email, name, password, user_type]
        email_patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if not re.match(email_patron, email):
            return jsonify({"message":"Email invalid"}),400
        if None in verify_data:
            return jsonify({"message":"All parameters are required"}), 400
        user_exist = User.query.filter_by(email = email).first()
        if user_exist:
            return jsonify({"message":"User already exist"}), 400
        salt = str(gensalt(), encoding = 'utf-8')
        password_and_salt = password + salt
        password_hash = str(generate_password_hash(password_and_salt), encoding = 'utf-8')
        new_user = User(name = name, user_type = user_type, email = email, password_hash = password_hash, salt = salt)
        try:
            db.session.add(new_user)
            db.session.commit()
            return jsonify({"message": f"User {email} registered"}), 201
        except Exception as error:
            db.session.rollback()
            print(error)
            return jsonify ({"message": "Server error"}), 500

@api.route('/veterinary', methods=['POST'])
def singup_veterinary():
    if request.method == 'POST':
        data = request.json
        email = data.get("email")
        name =  data.get("name")
        user_type = data.get("user_type")
        password = data.get("password")
        phone = data.get("phone")
        address = data.get("address")
        country = data.get("country")
        if user_type != "veterinary" and user_type != "user":
            return jsonify({"message":"type invalid"}), 400
        verify_data = [email, name, password, user_type, phone, address, country]
        email_patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if not re.match(email_patron, email):
            return jsonify({"message":"Email invalid"}),400
        if None in verify_data:
            return jsonify({"message":"All parameters are required"}), 400
        user_exist = User.query.filter_by(email = email).first()
        if user_exist:
            return jsonify({"message":"User already exist"}), 400
        salt = str(gensalt(), encoding = 'utf-8')
        password_and_salt = password + salt
        password_hash = str(generate_password_hash(password_and_salt), encoding = 'utf-8')
        new_user = User(name = name, user_type = user_type, email = email, password_hash = password_hash, salt = salt)
        try:
            db.session.add(new_user)
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            print(error)
            return jsonify ({"message": "Server error"}), 500

        new_veterinary = Veterinary(phone = phone, address = address, country = country, user_id = new_user.id)
        try:
            db.session.add(new_veterinary)
            db.session.commit()
            return jsonify({"message": f"Veterinary {email} registered"}), 201
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
        user_exist = User.query.filter_by(email=email).first()
        if user_exist is None:
            return jsonify({"message":"User does not exist"}), 400
        password = password + user_exist.salt
        password_hash = user_exist.password_hash
        validation_password = check_password_hash(password_hash, password)
        try:
            if validation_password:
                token = create_access_token(identity= user_exist.id)
                return jsonify({"message":"Authentication successful",
                                "token": token,
                                "name": user_exist.name,
                                }), 201 
            else:
                return jsonify({"message":"Invalid email or password"}), 401  
        except Exception as error:
            db.session.rollback()
            print(error)
            return jsonify({"message": "Server error"}), 500 


@api.route('/user/pets', methods=['POST', 'GET'])
@jwt_required()
def handle_pets():
    
    user_id = get_jwt_identity()

    # Verficiar si el usuario con esa id existe
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "User not found"}), 404

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
            return jsonify({"message": "Pet successfully registered"}), 201
        except Exception as error:
            db.session.rollback()
            return jsonify({"message": "Server error"}), 500
        
    # Get
    pet_list = [{"id": pet.id, "name": pet.name, "photo": pet.photo} for pet in user.pet]
    return jsonify({'Pets': pet_list})


@api.route('/user/pets/<int:pet_id>', methods=['GET', 'DELETE'])
@jwt_required()
def pet_properties(pet_id):
    
    user_id = get_jwt_identity()

    # Verficiar si el usuario con esa id existe
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "User not found"}), 404

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
        print(error)
        return jsonify({
            "message": "Something went wrong, try again later"
        }), 500

@api.route('/veterinary/pets', methods=['POST', 'GET'])
@jwt_required()
def handle_patients():
    
    # Información del veterinario
    veterinary_id = get_jwt_identity()
    veterinary = User.query.filter_by(id=veterinary_id, user_type="veterinary").first()

    # POST
    if request.method == 'POST':
        data = request.json
        name = data.get("name") # Nombre de la mascota
        born_date = data.get("born_date")
        breed = data.get("breed")
        gender = data.get("gender")
        animal = data.get("animal")
        photo = data.get("photo")

        # Información del dueño de la mascota
        owner_email = data.get("owner_email")
        owner_name = data.get("owner_name")
        owner_phone = data.get("owner_phone")
        owner_address = data.get("owner_address")


        # Verificaciones
        verify_data = [name, born_date, breed, gender, animal, owner_email, owner_name, owner_phone, owner_address]
        if None in verify_data:
            return jsonify({"message": "All parameters are required"}), 400     

        # Verificar si el usuario con ese email existe y es un usuario normal
        user = User.query.filter_by(email=owner_email, user_type="user").first()
        if user is None:
            return jsonify({"message": "User not found"}), 404

        # Verficiar si la mascota con ese id existe
        pets = user.pet
        print(pets) 

        # Creación de la mascota vinculada al usuario
        new_pet = Pet(
            name=name, 
            user_id=user.id, 
            born_date=born_date, 
            breed=breed, 
            gender=gender, 
            animal=animal, 
            photo=photo
            )
        try:
            db.session.add(new_pet)
            db.session.commit()

        except Exception as error:
            db.session.rollback()
            print(error)
            return jsonify({"message": "Server Error"}), 500

        try:
            # Creación de la ficha del paciente para el veterinario
            new_patient_file = PatientFile(
                pet_id=new_pet.id,
                veterinary_id=veterinary.id,
                owner_name=owner_name,
                owner_phone=owner_phone,
                owner_address=owner_address,
                owner_email=owner_email
            )
            db.session.add(new_patient_file)
            db.session.commit()
            return jsonify({"message": "Pet and Patient file successfully created"}), 201

        except Exception as error:
            db.session.rollback()
            print(error)
            return jsonify({"message": "Server Error"}), 500        
        

    # GET
    pet_list = [{"pet_name": patients.pet.name, "owner_name": patients.owner_name, "pet_photo": patients.pet.photo if patients.pet.photo else "No photo available"} for patients in veterinary.patient_file]
    return jsonify({"Patients": pet_list})
        

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import PatientList from "../component/patientList";
import PatientModal from "../component/patientModal";
import VeterinaryClinic from "../component/veterinaryClinic";
import defaultPetImgUrl from '../../img/foto-cat-doc.png';
import "../../styles/vetView.css";

const BACKEND_URL = process.env.BACKEND_URL;

const Dashboard = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);
    const [newPetData, setNewPetData] = useState({
        name: "",
        born_date: "",
        breed: "",
        gender: "",
        animal: "",
        photo: null,
    });

    const [errorMessages, setErrorMessages] = useState({
        name: "",
        born_date: "",
        breed: "",
        gender: "",
        animal: "",
        photo: "",
    })

    const name = localStorage.getItem("name");

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);

        setErrorMessages({
            name: "",
            born_date: "",
            breed: "",
            gender: undefined,
            animal: undefined,
            photo: "",
        });
    };

    const handleInputChange = (e) => {
        setNewPetData({
            ...newPetData,
            [e.target.name]: e.target.value,
        });
        setErrorMessages({
            ...errorMessages,
            [e.target.name]: "",
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const fromData = new FormData();
        fromData.append('file', file);
        fromData.append('upload_preset', process.env.PRESENT_KEY);

        try {
            const data = await actions.cloudinaryUpload(fromData);
            console.log(data);
            const photo = data.secure_url
            console.log(photo)
            setNewPetData({
                ...newPetData,
                photo: photo
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch(BACKEND_URL + "api/veterinary/pets", {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token"),
                        "Content-Type": 'application/json'
                    }
                })
                if (response.ok) {
                    const responseData = await response.json();
                    console.log(responseData);
                    actions.setPatients(responseData.Patients);
                } else {
                    console.error('Error al obtener las mascotas', response.status);
                }
            } catch (error) {
                console.error('Error al obtener las mascotas', error);
            }
        };

        fetchPatients();
    }, [store.patients]);

    const handleAddPet = async () => {
        const validationErrors = {};

        if (!newPetData.name.trim()) {
            validationErrors.name = "El nombre de la mascota es requerido";
        }
        if (!newPetData.born_date.trim()) {
            validationErrors.born_date = "La fecha de nacimiento de la mascota es requerida";
        }

        if (!newPetData.gender || newPetData.gender === 'Selecciona género') {
            validationErrors.gender = "El género de la mascota es requerido";
        }

        if (!newPetData.animal || newPetData.animal === 'Selecciona especie') {
            validationErrors.animal = "La especie de la mascota es requerida";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrorMessages(validationErrors);
            return;
        }

        if (!newPetData.photo) {
            newPetData.photo = defaultPetImgUrl;
        }

        try {
            const formData = new FormData();
            formData.append("name", newPetData.name);
            formData.append("born_date", newPetData.born_date);
            formData.append("breed", newPetData.breed);
            formData.append("gender", newPetData.gender);
            formData.append("animal", newPetData.animal);
            formData.append("photo", newPetData.photo);

            const response = await fetch((BACKEND_URL + `api/user/pets`), {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: newPetData.name,
                    born_date: newPetData.born_date,
                    breed: newPetData.breed,
                    gender: newPetData.gender,
                    animal: newPetData.animal,
                    photo: newPetData.photo,
                }),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);

                if (actions.addPet) {
                    actions.addPet(newPetData);
                }

                setNewPetData({
                    name: "",
                    born_date: "",
                    breed: "",
                    gender: "",
                    animal: "",
                    photo: null,
                });
            } else {
                console.error('Error al agregar la mascota', response.status);
            }

            handleCloseModal();
        } catch (error) {
            console.error('Error al agregar la mascota', error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [])


    return (
        <div className="container dashboard-container-vet text-center">
            <h1 className="bienvenida mt-5 mb-4"> <i className="fas fa-star patient-icon"></i> ¡Hola Dr. <span className='header-bienvenida' id="header-bienvenida-vet" >{name}</span>!</h1>
            <PatientList patients={store.patients} handleOpenModal={handleOpenModal} />
            <VeterinaryClinic />
            <PatientModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleInputChange={handleInputChange}
                handleFileChange={handleFileChange}
                handleAddPet={handleAddPet}
                newPetData={newPetData}
                errorMessages={errorMessages}
            />
        </div >
    );
};

export default Dashboard;
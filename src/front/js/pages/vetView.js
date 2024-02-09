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
    const [newPatientData, setNewPatientData] = useState({
        name: "",
        born_date: "",
        breed: "",
        gender: "",
        animal: "",
        photo: null,
        ownerName: "",
        ownerEmail: "",
        ownerPhone: "",
        ownerAddress: ""
    });

    const [errorMessages, setErrorMessages] = useState({
        name: "",
        born_date: "",
        breed: "",
        gender: "",
        animal: "",
        photo: "",
        ownerName: "",
        ownerEmail: "",
        ownerPhone: "",
        ownerAddress: ""
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
            ownerName: "",
            ownerEmail: "",
            ownerPhone: "",
            ownerAddress: ""
        });
    };

    const handleInputChange = (e) => {
        setNewPatientData({
            ...newPatientData,
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
            const photo = data.secure_url
            setNewPatientData({
                ...newPatientData,
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

    const handleAddPatient = async () => {
        const validationErrors = {};

        if (!newPatientData.name.trim()) {
            validationErrors.name = "El nombre de la mascota es requerido";
        }
        if (!newPatientData.born_date.trim()) {
            validationErrors.born_date = "La fecha de nacimiento de la mascota es requerida";
        }

        if (!newPatientData.gender || newPatientData.gender === 'Selecciona género') {
            validationErrors.gender = "El género de la mascota es requerido";
        }

        if (!newPatientData.animal || newPatientData.animal === 'Selecciona especie') {
            validationErrors.animal = "La especie de la mascota es requerida";
        }

        if (!newPatientData.ownerName.trim()) {
            validationErrors.ownerName = "El nombre del dueño es requerido";
        }

        if (!newPatientData.ownerEmail.trim()) {
            validationErrors.ownerEmail = "El email del dueño es requerido";
        }

        if (!newPatientData.ownerPhone.trim()) {
            validationErrors.ownerPhone = "El telefono del dueño es requerido";
        }

        if (!newPatientData.ownerAddress.trim()) {
            validationErrors.ownerAddress = "La direccion del dueño es requerido";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrorMessages(validationErrors);
            return;
        }

        if (!newPatientData.photo) {
            newPatientData.photo = defaultPetImgUrl;
        }

        try {
            const formData = new FormData();
            formData.append("name", newPatientData.name);
            formData.append("born_date", newPatientData.born_date);
            formData.append("breed", newPatientData.breed);
            formData.append("gender", newPatientData.gender);
            formData.append("animal", newPatientData.animal);
            formData.append("photo", newPatientData.photo);
            formData.append("photo", newPatientData.ownerName);
            formData.append("photo", newPatientData.ownerEmail);
            formData.append("photo", newPatientData.ownerPhone);
            formData.append("photo", newPatientData.ownerAddress);

            const response = await fetch((BACKEND_URL + `api/veterinary/pets`), {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: newPatientData.name,
                    born_date: newPatientData.born_date,
                    breed: newPatientData.breed,
                    gender: newPatientData.gender,
                    animal: newPatientData.animal,
                    photo: newPatientData.photo,
                    owner_name: newPatientData.ownerName,
                    owner_email: newPatientData.ownerEmail,
                    owner_phone: newPatientData.ownerPhone,
                    owner_address: newPatientData.ownerAddress
                }),
            });

            if (response.ok) {

                if (actions.addPatient) {
                    actions.addPatient(newPatientData);
                }

                setNewPatientData({
                    name: "",
                    born_date: "",
                    breed: "",
                    gender: "",
                    animal: "",
                    photo: null,
                    ownerName: "",
                    ownerEmail: "",
                    ownerPhone: "",
                    ownerAddress: ""
                });
            } else {
                console.error('Error al agregar el paciente', response.status);
            }

            handleCloseModal();
        } catch (error) {
            console.error('Error al agregar el paciente', error);
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
                handleAddPatient={handleAddPatient}
                newPatientData={newPatientData}
                errorMessages={errorMessages}
            />
        </div >
    );
};

export default Dashboard;
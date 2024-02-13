import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import "../../styles/pet.css";
import { Context } from "../store/appContext";

export const Pets = () => {
    const { store, actions } = useContext(Context);
    const location = useLocation();
    const petId = location.pathname.split('/')[2]
    const pet = store.pet
    const [showMessage, setShowMessage] = useState(false);
    const { id } = useParams()
    const date = new Date(pet.born_date);
    const formattedDate = errorDate();
    const actualDate = new Date();
    const age = ageOperation(date, actualDate);
    const [visibleHistory, setVisibleHistory] = useState(false);
    const [visibleAppointments, setVisibleAppointments] = useState(false);
    const [visibleOthers, setVisibleOthers] = useState(false);

    const [lastVaccines, setLastVaccines] = useState([
        { name: "Rabia", date: "2023-12-01" },
        { name: "Parvovirus", date: "2023-11-15" },
        { name: "Moquillo", date: "2023-10-25" },
        { name: "Hepatitis", date: "2023-09-30" },
        { name: "Leptospirosis", date: "2023-09-15" }
    ]);

    const [nextAppointments, setNextAppointments] = useState([
        { type: "Baño", date: "2024-02-10" },
        { type: "Desparacitación", date: "2024-02-15" },
        { type: "Vacunación", date: "2024-02-20" },
        { type: "Cirugía", date: "2024-02-25" },
        { type: "Revisión General", date: "2024-03-01" }
    ]);

    const [otherInfo, setOtherInfo] = useState([
        "La mascota requiere de medicamento especial ya que tiene hipertensión",
        "La mascota es agresiva con otros animales",
        "La mascota es alérgica a ciertos alimentos",
        "La mascota solo come si le hablas en francés",
    ]);

    const handleToggleHistory = () => {
        setVisibleHistory(!visibleHistory);
    };

    const handleToggleAppointments = () => {
        setVisibleAppointments(!visibleAppointments);
    };

    const handleToggleOthers = () => {
        setVisibleOthers(!visibleOthers);
    };

    function errorDate() {
        const day = date.getDate() + 1;
        if (day > 31) {
            return `${date.getDate() - 30}/${date.getMonth() + 2}/${date.getFullYear()}`
        } else {
            return `${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`
        }
    }

    function ageOperation(dateOfBirth, currentDate) {
        const yearsDiff = currentDate.getFullYear() - dateOfBirth.getFullYear();
        const monthsDiff = currentDate.getMonth() - dateOfBirth.getMonth();
        const daysDiff = currentDate.getDate() - dateOfBirth.getDate();
        const resul = (yearsDiff * 365) + Math.floor(monthsDiff * 30.4167) + daysDiff;

        if (resul < 0) {
            return `Aun no nace`;
        }

        if (resul < 31) {
            if (resul === 1) {
                return `1 día`;
            } else {
                return `${resul} días`;
            }
        }

        if (resul < 365) {
            if (Math.floor(resul / 30.4167) === 1) {
                return `1 mes`;
            } else {
                return `${Math.floor(resul / 30.4167)} meses`;
            }
        }

        if (resul >= 365) {
            if (Math.floor(resul / 365) === 1) {
                return `1 año`;
            } else {
                return `${Math.floor(resul / 365)} años`;
            }
        }
    }

    // Función auxiliar para capitalizar la primera letra de una cadena
    function capitalizarPrimeraLetra(str) {
        if (!str) return str; // Manejo del caso en que str es undefined o null
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleShowMessage = () => {
        setShowMessage(true);
    };

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const petData = await actions.handelPet(petId);
                console.log(petData);
            } catch (error) {
                console.log("Error fetching pet data:", error);
            }
        };
        fetchPet();
    }, [])


    return pet ? (
        <div className="container-fluid div-signup d-flex align-items-center flex-column background-container-forms">
            <div>

            </div>
            <div className="imgen">
                <img src={`${store.pet.photo}`} alt="Pet Image" />
            </div>
            <h1 className="mt-4">{capitalizarPrimeraLetra(store.pet.name)}</h1>
            <div className="info d-flex div-signup flex-column mt-3">
                <h5 className="mx-2 mb-4">📅 <strong>Fecha de nacimiento:</strong> {formattedDate}</h5>
                <h5 className="mx-2 mb-4">🐾 <strong>Raza:</strong> {store.pet.breed}</h5>
                <h5 className="mx-2 mb-4">⏱️ <strong>Edad:</strong> {age}</h5>
                <h5 className="mx-2 mb-4">🧬 <strong>Género:</strong> {store.pet.gender}</h5>
                <h5 className="mx-2 mb-4">🐶 <strong>Especie:</strong> {store.pet.animal}</h5>
            </div>
            <div className="info d-flex div-signup flex-column align-items-center mt-3">
                <div className="w-100 my-1">
                    <div className="d-flex justify-content-between align-items-center button-pet w-100">
                        <div className={`text-button d-flex ${visibleHistory ? 'open' : ''}`}>
                            <i className={`fas fa-paw icon detail-icon ${visibleHistory} ? 'open' : ''}`} style={{ fontSize: "1.2rem" }}></i>
                            <h5 className={`text-button-history-title ${visibleHistory ? 'open' : ''}`} onClick={handleToggleHistory}>
                                Historial
                            </h5>
                            {visibleHistory && (
                                <div className="history-content text-center">
                                    <h6 className="history-subtitle mt-1 mb-3">Historial de vacunas</h6>
                                    <ul className={`list-unstyled ${visibleHistory ? 'open' : ''}`}>
                                        {lastVaccines.map((vaccine, index) => (
                                            <li key={index} className="mb-2 text-start">
                                                <i className="fas fa-syringe me-2"></i>
                                                <span>{vaccine.name}</span>
                                                <span className="ms-2">({vaccine.date})</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="btn arrow-button" onClick={handleToggleHistory}>
                                <i className={visibleHistory ? "fas fa-arrow-down text-white" : "fas fa-arrow-right"}></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-100 my-1">
                    <div className="d-flex justify-content-between align-items-center button-pet w-100">
                        <div className={`text-button d-flex ${visibleAppointments ? 'open' : ''}`}>
                            <i className="fas fa-calendar-alt detail-icon" style={{ fontSize: "1.2rem" }}></i>
                            <h5 className={`text-button-apointment-title ${visibleAppointments ? 'open' : ''}`} onClick={handleToggleAppointments}>
                                Citas
                            </h5>
                            {visibleAppointments && (
                                <div className="history-content text-center">
                                    <h6 className="history-subtitle mt-1 mb-3">Próximas Citas:</h6>
                                    <ul className="list-unstyled">
                                        {nextAppointments.map((nextAppointments, index) => (
                                            <li key={index} className="mb-2 text-start">
                                                <i className="fas fa-calendar-check me-2"></i>
                                                <span>{nextAppointments.type}</span>
                                                <span className="ms-2">({nextAppointments.date})</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="btn arrow-button" onClick={handleToggleAppointments}>
                                <i className={visibleAppointments ? "fas fa-arrow-down text-white" : "fas fa-arrow-right"}></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-100 my-1">
                    <div className="d-flex justify-content-between align-items-center button-pet w-100">
                        <div className={`text-button d-flex ${visibleOthers ? 'open' : ''}`}>
                            <i className={`fas fa-info-circle detail-icon ${visibleOthers ? 'open' : ''}`} style={{ fontSize: "1.2rem" }}></i>
                            <h5 className={`text-button-other-title ${visibleOthers ? 'open' : ''}`} onClick={handleToggleOthers}>
                                Otros Detalles
                            </h5>
                            {visibleOthers && (
                                <div className="others-content">
                                    <h5 className="others-title"></h5>
                                    <ul className="others-list mt-3clea">
                                        {otherInfo.map((info, index) => (
                                            <li key={index} className="others-item">{info}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="btn arrow-button" onClick={handleToggleOthers}>
                                <i className={visibleOthers ? "fas fa-arrow-down text-white" : "fas fa-arrow-right"}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to='/dashboard' className="btn btn-light text-black rounded-3" type="button" onClick={() => window.scrollTo(0, 0)} >
                    <p className="back-button">Mis Mascotas <br /><i className="fas fa-arrow-left "></i></p>
                </Link>
            </div>
        </div >
    ) : (
        <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>

    );
};

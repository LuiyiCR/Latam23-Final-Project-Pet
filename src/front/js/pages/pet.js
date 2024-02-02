import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import "../../styles/pet.css";
import { Context } from "../store/appContext";

export const Pets = () => {
    const { store, actions } = useContext(Context);
    const location = useLocation();
    const petId = location.pathname.split('/')[2]
    const pet = store.pet
    const [showMessage, setShowMessage] = useState(false);
    const {id} = useParams()
    const date = new Date(pet.born_date);
    const formattedDate = `${date.getDate()+1}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const actualDate = new Date();
    const age = ageOperation(date, actualDate);
    
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
    
    console.log("Fecha de nacimiento:", formattedDate);
    console.log(age)

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

    return store.pet ? ( 
            <div className="container-fluid div-signup d-flex align-items-center flex-column background-container-forms">
                <div className="imgen">
                    <img src={`${store.photo}`} alt="Pet Image" />
                </div>
                <h1 className="mt-4">{store.pet.name}</h1>
                <div className="info d-flex div-signup flex-column mt-3">
                <h5 className="mx-2">Fecha de nacimiento: {formattedDate}</h5>
                <h5 className="mx-2">Raza: {store.pet.breed}</h5>
                <h5 className="mx-2">Edad: {age}</h5>
                <h5 className="mx-2">Género: {store.pet.gender}</h5>
                <h5 className="mx-2">Especie: {store.pet.animal}</h5>

                    
                </div>
                <div className="info d-flex div-signup flex-column align-items-center mt-3">
                <div className="w-100 my-1">
                        <div className="  d-flex justify-content-between align-items-center button-pet w-100 ">
                            <div className="text-button d-flex ">
                                <i className="fas fa-paw icon"></i>
                                <h5 className="text-button-info">
                                Historial
                                </h5>
                            </div>
                            <div className="">
                                <button className="btn arrow-button" onClick={handleShowMessage}>
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 my-1">
                        <div className="  d-flex justify-content-between align-items-center button-pet w-100 ">
                            <div className="text-button d-flex ">
                                <i className="fas fa-calendar icon"></i>
                                <h5 className="text-button-info">
                                Citas
                                </h5>
                            </div>
                            <div className="">
                                <button className="btn arrow-button" onClick={handleShowMessage}>
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 my-1">
                        <div className="  d-flex justify-content-between align-items-center button-pet w-100 ">
                            <div className="text-button d-flex ">
                                <i className="fas fa-exclamation-circle icon"></i>
                                <h5 className="text-button-info">
                                Otros
                                </h5>
                            </div>
                            <div className="">
                                <button className="btn arrow-button" onClick={handleShowMessage}>
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {showMessage && (
                    <div className="alert alert-warning message" role="alert">
                        Próximamente
                </div>)}
            </div>
        ) : (
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        
    );
};

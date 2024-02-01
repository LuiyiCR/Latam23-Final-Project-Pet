import React, { useContext, useEffect, useState } from "react";
import "../../styles/pet.css";
import { Context } from "../store/appContext";

export const Pets = () => {
    const { store, actions } = useContext(Context);
    const [showMessage, setShowMessage] = useState(false);

    const handleShowMessage = () => {
        setShowMessage(true);
    };

    return (
        <div className="container-fluid div-signup d-flex align-items-center flex-column background-container-forms">
            <div className="imgen">
                <img src={`${store.photo}`} alt="Pet Image" />
            </div>
            <h1 className="mt-4">{store.pet.name}</h1>
            <div className="info d-flex div-signup flex-column mt-3">
                <h5 className="mx-2">Fecha de nacimiento: {store.pet.born_date}</h5>
                <h5 className="mx-2">Raza: {store.pet.breed}</h5>
                <h5 className="mx-2">Género: {store.pet.gender}</h5>
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
                </div>
            )}
        </div>
    );
};

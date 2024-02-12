import React, { useState } from "react";
import "../../styles/veterinaryClinic.css";

const VeterinaryClinic = () => {

    const [showMessage, setShowMessage] = useState(false);

    const handleShowMessage = () => {
        setShowMessage(true);
    };

    return (
        <div className="clinic-section">
            <div className="clinic-section-info">
                <h3>
                    Aun no tienes registrada tu <span className='about-us-text-highlight'>Clinica veterinaria</span>, hazlo ahora mismo, hazte conocer! 🧑‍⚕️
                </h3>
            </div>
            <div className="clinic-section-images">
                <img src="https://www.simbiotia.com/wp-content/uploads/diseno-de-clinicas-veterinarias.jpg" />
                <img src="https://estudioniddo.com/wp-content/uploads/2018/02/galeria_24-2048x1365.jpg" />
            </div>
            <div className="clinic-section-button">
                <button className="button btn text-white rounded-3 m-3" id='button-vet' onClick={handleShowMessage}>
                    Click aqui!
                </button>
            </div>
            {showMessage && (
                <div className="alert alert-warning message" role="alert">
                    Próximamente
                </div>)}
        </div>
    )
}

export default VeterinaryClinic;
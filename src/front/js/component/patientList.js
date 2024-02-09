import React from 'react';
import "../../styles/vetView.css";

const PatientList = ({ patients, handleOpenModal }) => {

    if (patients && patients.length > 0) {
        return (<div className="section-your-pets">
            <h3 className='mb-5'>Tus Pacientes:</h3>
            <div className="card-container card-mis-mascotas">
                {patients.map((pet, index) => (
                    <div key={index} className="card card-mis-pacientes">
                        <img src={pet.photo} alt={pet.name} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{pet.name}</h5>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </div>
                ))}
            </div>
            <button className="button btn text-white rounded-3 mb-3" id='button-vet' onClick={handleOpenModal}>
                Agregar Nuevo Paciente
            </button>
        </div>
        )
    }
    if (patients && patients.length === 0) {
        return (
            <div className="section-add-pet">
                <h3 className='m-3'>¡No tienes pacientes registrados, agrega una ahora! <i className="fas fa-paw patient-icon" ></i></h3>
                <img src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" alt="Gatito" className="img-gatito" />
                <button className="button btn text-white rounded-3 m-3" id='button-vet' onClick={handleOpenModal}>
                    Agregar Paciente
                </button>
            </div >
        )
    }
    return (<div>Cargando!</div>)
}

export default PatientList;
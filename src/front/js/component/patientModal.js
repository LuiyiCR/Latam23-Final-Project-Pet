import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../styles/PetModal.css";

const PatientModal = ({ showModal, handleCloseModal, handleInputChange, handleFileChange, handleAddPatient, newPatientData: propNewPatientData, errorMessages: propErrorMessages }) => {

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 2; // Total number of steps

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };


    return (
        <Modal show={showModal} onHide={handleCloseModal} className="motso">
            <Modal.Header className="my-modal-header" closeButton>
                <Modal.Title>Crear una ficha para el paciente 🐾 🐕 🐈‍⬛</Modal.Title>
            </Modal.Header>
            <Modal.Body className="my-modal-body">

                <div className={`container-form-patient ${currentStep !== 1 ? "hidden" : ""}`}>
                    <div className="form-group">
                        <h3>Datos de la mascota</h3>
                        <label htmlFor="nombre">Nombre <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            name="name"
                            onChange={handleInputChange}
                            value={propNewPatientData.name}
                            placeholder="¿Cuál es el nombre de la mascota?"
                        />

                        {propErrorMessages.name && <small className="text-danger">{propErrorMessages.name}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha_de_nacimiento">Fecha de nacimiento <span className="text-danger">*</span></label>
                        <input
                            type="date"
                            className="form-control"
                            id="fecha_de_nacimiento"
                            name="born_date"
                            onChange={handleInputChange}
                            value={propNewPatientData.born_date}
                        />
                        {propErrorMessages.born_date && <small className="text-danger">{propErrorMessages.born_date}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="raza">Raza</label>
                        <input
                            type="text"
                            className="form-control"
                            id="raza"
                            name="breed"
                            onChange={handleInputChange}
                            value={propNewPatientData.breed}
                            placeholder="¿Cuál es la raza de tu mascota?"
                        />
                        {propErrorMessages.breed && <small className="text-danger">{propErrorMessages.breed}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Género<span className="text-danger">*</span></label>
                        <select
                            className="form-select"
                            id="gender"
                            name="gender"
                            value={propNewPatientData.gender}
                            onChange={handleInputChange}
                            style={{ color: propNewPatientData.gender ? 'black' : '#999' }}
                        >
                            <option value="" disabled style={{ color: '#999' }}>Selecciona género</option>
                            <option value="Macho">Macho</option>
                            <option value="Hembra">Hembra</option>
                            <option value="Desconocido">Desconocido</option>
                        </select>
                        {propErrorMessages.gender && <small className="text-danger">{propErrorMessages.gender}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="animal">Especie<span className="text-danger">*</span></label>
                        <select
                            className="form-select"
                            id="animal"
                            name="animal"
                            value={propNewPatientData.animal}
                            onChange={handleInputChange}
                            style={{ color: propNewPatientData.animal ? 'black' : '#999' }}
                        >
                            <option value="" disabled style={{ color: '#999' }}>Selecciona especie</option>
                            <option value="Perro">Perro</option>
                            <option value="Gato">Gato</option>
                            <option value="Conejo">Conejo</option>
                            <option value="Otros">Otros</option>
                        </select>
                        {propErrorMessages.animal && <small className="text-danger">{propErrorMessages.animal}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="foto">Foto</label>
                        <input
                            type="file"
                            className="form-control"
                            id="foto"
                            name="photo"
                            accept="image/*"
                            lang="es"
                            onChange={handleFileChange}
                        />
                        {propErrorMessages.photo && <small className="text-danger">{propErrorMessages.photo}</small>}
                        {propNewPatientData.photo ?
                            <div className="mesagge-upload-photo d-flex align-items-center my-2">
                                <i className="fas fa-check-circle mr-2" style={{ color: "green" }}></i>
                                <p className="my-0 mx-1">Listo!</p>
                            </div>
                            :
                            <div className="mesagge-upload-photo d-flex align-items-center my-2">
                                <i className="fas fa-image mr-1" style={{ color: "red" }}></i>
                                <p className="my-0 mx-1">No hay archivo ....</p>
                            </div>
                        }
                    </div>
                </div>
                <div className={`container-form-owner ${currentStep !== 2 ? "hidden" : ""}`}>
                    <div className="form-group">
                        <h3>Datos del dueño</h3>
                        <label htmlFor="owner_name">Nombre <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="ownerName"
                            name="ownerName"
                            onChange={handleInputChange}
                            value={propNewPatientData.ownerName}
                            placeholder="¿Cuál es el nombre del dueño?"
                        />

                        {propErrorMessages.ownerName && <small className="text-danger">{propErrorMessages.ownerName}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="ownerEmail">Email<span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="ownerEmail"
                            name="ownerEmail"
                            onChange={handleInputChange}
                            value={propNewPatientData.ownerEmail}
                            placeholder="¿Cuál es el correo electronico?"
                        />

                        {propErrorMessages.ownerEmail && <small className="text-danger">{propErrorMessages.ownerEmail}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="ownerPhone">Telefono<span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="ownerPhone"
                            name="ownerPhone"
                            onChange={handleInputChange}
                            value={propNewPatientData.ownerPhone}
                            placeholder="¿Cuál es telefono del dueño?"
                        />

                        {propErrorMessages.ownerPhone && <small className="text-danger">{propErrorMessages.ownerPhone}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="ownerAddress">Direccion<span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="ownerAddress"
                            name="ownerAddress"
                            onChange={handleInputChange}
                            value={propNewPatientData.ownerAddress}
                            placeholder="¿Cuál es la direccion?"
                        />

                        {propErrorMessages.ownerAddress && <small className="text-danger">{propErrorMessages.ownerAddress}</small>}
                    </div>
                </div>

            </Modal.Body>
            <div className="text-center">
                <small className="text-muted"><span className="text-danger">*</span>Campos obligatorios</small>
            </div>
            <Modal.Footer className="my-modal-footer">
                {currentStep !== 1 && (
                    <Button className="btn btn-light text-black rounded-3" variant="secondary" onClick={prevStep}>
                        Anterior
                    </Button>
                )}
                {currentStep !== totalSteps ? (
                    <Button className="btn btn-light text-black rounded-3" variant="primary" onClick={nextStep}>
                        Siguiente
                    </Button>
                ) : (
                    <Button className="button btn text-white rounded-3" variant="primary" onClick={handleAddPatient}>
                        Guardar
                    </Button>
                )}
                <Button className="btn btn-light text-black rounded-3" variant="secondary" onClick={handleCloseModal}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default PatientModal;
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../styles/PetModal.css";

const PetModal = ({ showModal, handleCloseModal, handleInputChange, handleFileChange, handleAddPet, newPetData: propNewPetData, errorMessages: propErrorMessages }) => {

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header className="my-modal-header" closeButton>
        <Modal.Title>Agrega los datos de tu mascota 🐾 🐱 🐰</Modal.Title>
      </Modal.Header>
      <Modal.Body className="my-modal-body">
        <div className="form-group">
          <label htmlFor="nombre">Nombre <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="name"
            onChange={handleInputChange}
            value={propNewPetData.name}
            placeholder="¿Cuál es el nombre de tu mascota?"
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
            value={propNewPetData.born_date}
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
            value={propNewPetData.breed}
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
            value={propNewPetData.gender}
            onChange={handleInputChange}
            style={{ color: propNewPetData.gender ? 'black' : '#999' }}
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
            value={propNewPetData.animal}
            onChange={handleInputChange}
            style={{ color: propNewPetData.animal ? 'black' : '#999' }}
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
          {propNewPetData.photo ?
            <div className="mesagge-upload-photo d-flex align-items-center my-2">
              <i className="fas fa-check-circle mr-2" style={{ color: "green" }}></i>
              <p className="my-0 mx-1">Listo!</p>
            </div>
            :
            <div className="mesagge-upload-photo d-flex align-items-center my-2">
              <i className="fas fa-image mr-1" style={{ color: "red" }}></i>
              <p className="my-0 mx-1 cloudinary-confirmation">No hay archivo ....</p>
            </div>
          }
        </div>
      </Modal.Body>
      <div className="text-center">
        <small className="text-muted"><span className="text-danger">*</span>Campos obligatorios</small>
      </div>
      <Modal.Footer className="my-modal-footer">
        <Button className="btn btn-light text-black rounded-3" variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
        <Button className="button btn text-white rounded-3" variant="primary" onClick={handleAddPet}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default PetModal;
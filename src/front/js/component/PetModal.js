import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const PetModal = ({ showModal, handleCloseModal, handleInputChange, handleFileChange, handleAddPet, newPetData, errorMessages }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Agrega los datos de tu mascota 🐾 🐱 🐰</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="nombre">Nombre <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="name"
            onChange={handleInputChange}
            value={newPetData.name}
          />
          {errorMessages.name && <small className="text-danger">{errorMessages.name}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="fecha_de_nacimiento">Fecha de nacimiento <span className="text-danger">*</span></label>
          <input
            type="date"
            className="form-control"
            id="fecha_de_nacimiento"
            name="born_date"
            onChange={handleInputChange}
            value={newPetData.born_date}
          />
          {errorMessages.born_date && <small className="text-danger">{errorMessages.born_date}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="raza">Raza</label>
          <input
            type="text"
            className="form-control"
            id="raza"
            name="breed"
            onChange={handleInputChange}
            value={newPetData.breed}
          />
          {errorMessages.breed && <small className="text-danger">{errorMessages.breed}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Genero<span className="text-danger">*</span></label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={newPetData.gender}
            onChange={handleInputChange}
            style={{ color: newPetData.gender ? 'black' : '#999' }}
          >
            <option value="" disabled style={{ color: '#999' }}>Selecciona género</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
            <option value="Desconocido">Desconocido</option>
          </select>
          {errorMessages.gender && <small className="text-danger">{errorMessages.gender}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="animal">Especie<span className="text-danger">*</span></label>
          <select
            className="form-select"
            id="animal"
            name="animal"
            value={newPetData.animal}
            onChange={handleInputChange}
            style={{ color: newPetData.animal ? 'black' : '#999' }}
          >
            <option value="" disabled style={{ color: '#999' }}>Selecciona especie</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Conejo">Conejo</option>
            <option value="Otros">Otros</option>
          </select>
          {errorMessages.animal && <small className="text-danger">{errorMessages.animal}</small>}
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
          {errorMessages.photo && <small className="text-danger">{errorMessages.photo}</small>}
        </div>
      </Modal.Body>
      <div className="text-center">
        <small className="text-muted"><span className="text-danger">*</span>Campos obligatorios</small>
      </div>
      <Modal.Footer>
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
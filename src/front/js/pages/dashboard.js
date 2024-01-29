import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import PetList from "../component/petlist";
import logo from "../../img/logopetplus.png";
import "../../styles/dashboard.css";

const BACKEND_URL = process.env.BACKEND_URL;

const Dashboard = () => {
  const { store } = useContext(Context);
  if (!store.pets) {
    store.pets = [];
  }
  const [showModal, setShowModal] = useState(false);
  const [newPetData, setNewPetData] = useState({
    nombre: "",
    fecha_de_nacimiento: "",
    discapacidad: "",
    raza: "",
    genero: "",
    especie: "",
    foto: "",
    historial_medico: "",
    otros: "",
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setNewPetData({
      ...newPetData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPet = async () => {
    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPetData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.error('Error al agregar la mascota', response.status);
      }

      handleCloseModal();
    } catch (error) {
      console.error('Error al agregar la mascota', error);
    }
  };

  return (
    <div className="container dashboard-container">
      <h1>{`¡Bienvenido...!`} {/*${store.user.name}*/}</h1>
      <PetList pets={store.pets} handleOpenModal={handleOpenModal} />

      <div className="card">
        <div className="card-body">
          <div className="event-info">
            <h5 className="card-title">Descubre eventos para tu mascota y únete</h5>
            <p className="card-text">Explora eventos divertidos y sociales para tu mascota. ¡No te los pierdas!</p>
            <button className="btn btn-primary">Ver más</button>
          </div>
          <img src="/ruta/imagen-evento.jpg" className="card-img" alt="Imagen Evento" />
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agrega tu mascota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              onChange={handleInputChange}
              value={newPetData.nombre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fecha_de_nacimiento">Fecha de nacimiento</label>
            <input
              type="date"
              className="form-control"
              id="fecha_de_nacimiento"
              name="fecha_de_nacimiento"
              onChange={handleInputChange}
              value={newPetData.fecha_de_nacimiento}
            />
          </div>
          <div className="form-group">
            <label htmlFor="discapacidad">Discapacidad</label>
            <input
              type="text"
              className="form-control"
              id="discapacidad"
              name="discapacidad"
              onChange={handleInputChange}
              value={newPetData.discapacidad}
            />
          </div>
          <div className="form-group">
            <label htmlFor="raza">Raza</label>
            <input
              type="text"
              className="form-control"
              id="raza"
              name="raza"
              onChange={handleInputChange}
              value={newPetData.raza}
            />
          </div>
          <div className="form-group">
            <label htmlFor="genero">Género</label>
            <input
              type="text"
              className="form-control"
              id="genero"
              name="genero"
              onChange={handleInputChange}
              value={newPetData.genero}
            />
          </div>
          <div className="form-group">
            <label htmlFor="especie">Especie</label>
            <input
              type="text"
              className="form-control"
              id="especie"
              name="especie"
              onChange={handleInputChange}
              value={newPetData.especie}
            />
          </div>
          <div className="form-group">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              className="form-control"
              id="foto"
              name="foto"
              onChange={handleInputChange}
              value={newPetData.foto}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleAddPet}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
  );
};

export default Dashboard;
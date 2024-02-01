import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import PetList from "../component/petlist";
import PetModal from "../component/PetModal";
import defaultPetImgUrl from '../../img/foto-cat-doc.png';
import logo from "../../img/logopetplus.png";
import "../../styles/dashboard.css";

const BACKEND_URL = process.env.BACKEND_URL;

const Dashboard = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [newPetData, setNewPetData] = useState({
    name: "",
    born_date: "",
    breed: "",
    gender: "",
    animal: "",
    photo: null,
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    born_date: "",
    breed: "",
    gender: "",
    animal: "",
    photo: "",
  })

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
    });
  };

  const handleInputChange = (e) => {
    setNewPetData({
      ...newPetData,
      [e.target.name]: e.target.value,
    });
    setErrorMessages({
      ...errorMessages,
      [e.target.name]: "",
    });
  };

  const handleFileChange = (e) => {
    setNewPetData({
      ...newPetData,
      photo: e.target.files[0],
    });
    setErrorMessages({
      ...errorMessages,
      photo: "",
    });
  };

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(BACKEND_URL + `api/user/pets`, {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
            "Content-Type": 'application/json'
          }
        })
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          actions.setPets(responseData.Pets);
        } else {
          console.error('Error al obtener las mascotas', response.status);
        }
      } catch (error) {
        console.error('Error al obtener las mascotas', error);
      }
    };

    fetchPets();
  }, [store.pets]);

  const handleAddPet = async () => {
    const validationErrors = {};

    if (!newPetData.name.trim()) {
      validationErrors.name = "El nombre de la mascota es requerido";
    }
    if (!newPetData.born_date.trim()) {
      validationErrors.born_date = "La fecha de nacimiento de la mascota es requerida";
    }

    if (!newPetData.gender || newPetData.gender === 'Selecciona género') {
      validationErrors.gender = "El género de la mascota es requerido";
    }

    if (!newPetData.animal || newPetData.animal === 'Selecciona especie') {
      validationErrors.animal = "La especie de la mascota es requerida";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    if (!newPetData.photo) {
      newPetData.photo = defaultPetImgUrl;
    }

    try {
      const formData = new FormData();
      formData.append("name", newPetData.name);
      formData.append("born_date", newPetData.born_date);
      formData.append("breed", newPetData.breed);
      formData.append("gender", newPetData.gender);
      formData.append("animal", newPetData.animal);
      formData.append("photo", newPetData.photo);

      const response = await fetch((BACKEND_URL + `api/user/pets`), {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newPetData.name,
          born_date: newPetData.born_date,
          breed: newPetData.breed,
          gender: newPetData.gender,
          animal: newPetData.animal,
          photo: newPetData.photo,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);

        if (actions.addPet) {
          actions.addPet(newPetData);
        }
      } else {
        console.error('Error al agregar la mascota', response.status);
      }

      handleCloseModal();
    } catch (error) {
      console.error('Error al agregar la mascota', error);
    }
  };

  return (
    <div className="container dashboard-container text-center">
      <h1 className="bienvenida mt-5 mb-4"> <i className="fas fa-star"></i> ¡Hola...! <span className='header-bienvenida'></span></h1>
      <PetList pets={store.pets} handleOpenModal={handleOpenModal} />
      <PetModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        handleAddPet={handleAddPet}
        newPetData={newPetData}
        errorMessages={errorMessages}
      />
    </div >
  );
};

export default Dashboard;
import React from 'react';

const PetList = ({ pets, handleOpenModal }) => {
  return (
    <React.Fragment>
      {pets.length > 0 ? (
        <div className="section-your-pets">
          <h3>Tus Mascotas:</h3>
          <ul>
            {pets.map((pet, index) => (
              <li key={index}>{pet.nombre}</li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={handleOpenModal}>
            Agregar Otra Mascota
          </button>
        </div>
      ) : (
        <div className="section-add-pet">
          <h3>Aun no tienes mascotas, agrega tu mascota</h3>
          <button className="btn btn-primary" onClick={handleOpenModal}>
            Agregar Mascota
          </button>
        </div>
      )}
    </React.Fragment >
  )
}

export default PetList;
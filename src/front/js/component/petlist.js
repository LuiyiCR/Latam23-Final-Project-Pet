import React from 'react';
import { Link } from 'react-router-dom';

const PetList = ({ pets, handleOpenModal }) => {

  if (pets && pets.length > 0) {
    return (<div className="section-your-pets">
      <h3 className='mb-5'>Tus Mascotas:</h3>
      <div className="card-container card-mis-mascotas">
        {pets.map((pet, index) => (
          <div key={index} className="card card-mis-mascotas">
            <Link to={`/pet/${pet.id}`} className="detalle-link">
              <img src={pet.photo} alt={pet.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <i className="fas fa-plus-circle"></i>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="button btn text-white rounded-3 mb-3" onClick={handleOpenModal}>
        Agregar Otra Mascota
      </button>
    </div>
    )
  }
  if (pets && pets.length === 0) {
    return (
      <div className="section-add-pet">
        <h3 className='m-3'>¡No tienes mascotas registradas, agrega una ahora! <i className="fas fa-paw"></i></h3>
        <img src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gatito" className="img-gatito" />
        <button className="button btn text-white rounded-3 m-3" onClick={handleOpenModal}>
          Agregar Mascota
        </button>
      </div >
    )
  }
  return (<div>Cargando!</div>)
}

export default PetList;
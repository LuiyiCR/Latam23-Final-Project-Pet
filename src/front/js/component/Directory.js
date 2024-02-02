import React from 'react';
import '../../styles/Directory.css';

const Directory = ({ veterinaries }) => {
  return (
    <React.Fragment>
      <h2 className='directory-header'>Directorio de Veterinarios</h2>
      <div className='directory-cards'>
        {veterinaries.map((veterinary, index) => (
          <div className='directory-card' key={index}>
            <h3 className='veterinary-name'>{veterinary.name}</h3>
            <p>{veterinary.phoneNumber}</p>
            <img className='veterinary-picture' src={veterinary.picture} alt={veterinary.name} />
            <p>{veterinary.country}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Directory;
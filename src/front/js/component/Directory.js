import React from 'react';

const Directory = ({ veterinaries }) => {
  return (
    <div>
      <h2 className='directory-header'>Directorio de Veterinarios</h2>
      {veterinaries.map((veterinary, index) => (
        <div className='test' key={index}>
          <h3 className='veterinary-name'>{veterinary.name}</h3>
          <p>{veterinary.phoneNumber}</p>
          <img className='veterinary-picture' src={veterinary.picture} alt={veterinary.name} />
          <p>{veterinary.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Directory;
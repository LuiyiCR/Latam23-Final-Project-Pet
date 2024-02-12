import React, { useEffect, useState } from 'react';
import '../../styles/Directory.css';

const Directory = () => {
  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVeterinaries = async () => {
      try {
        const response = await fetch(process.env.BACKEND_URL + 'api/veterinarys')
        const data = await response.json()
        console.log("Vets", data)
        setVets(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchVeterinaries()
  }, []);

  return (
    <React.Fragment>
      <div className='container'>
        <h2 className='directory-header'>Directorio de Veterinarios</h2>
        <div className='directory-cards'>
          {vets.length > 0 ? (
            vets.map((vet, index) => (
              <div className='directory-card' key={index}>
                <h3 className='veterinary-name'>{vet.name}</h3>
                <img className='veterinary-picture' src={"https://images.pexels.com/photos/9951386/pexels-photo-9951386.jpeg?auto=compress&cs=tinysrgb&w=600"} alt={""} />
                <div className='veterinary-location '>
                  <p className='veterinary-country'>{vet.veterinary.country}</p>
                  <p className='veterinary-country'>{vet.veterinary.address}</p>
                  <p className='veterinary-country'>{vet.veterinary.phone}</p>
                </div>

              </div>
            ))
          ) : (
            loading ? <p>Cargando...</p> : <p>No hay veterinarios disponibles.</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Directory;

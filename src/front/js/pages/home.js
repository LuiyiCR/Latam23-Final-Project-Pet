import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import heroImgUrl from '../../img/foto-pc.png';
import '../../styles/home.css';

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container" style={{ maxWidth: '1200px' }}>
      <div className="hero text-center">
        <div className="container">
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h1 className="hero-title">PET+, el mejor aliado en el cuidado de tus mascotas</h1>
              <p className="lead text-muted">
                Registra, controla, y disfruta de la salud de tus mascotas con Pet+.
                Mantén al día sus vacunas, peso, citas y más. Todo en un solo lugar,
                su bienestar merece la mejor atención.
              </p>

              <div className="d-grid gap-2">
                <button className="btn text-white" type="button">
                  Invitado
                </button>
                <button className="btn btn-light text-black" type="button">
                  Usuario
                </button>
                <button className="btn btn-light text-black" type="button">
                  Registrarse
                </button>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='img-container'>
                <img className="img-fluid mt-3 mb-3" src={heroImgUrl} alt='Picture of pets' />
              </div>
            </div>
          </div>
        </div>

        <p className="m-4">
          Acá puedes ver el código fuente{' '}
          <a href="https://github.com/4GeeksAcademy/Latam23-Final-Project-Pet">
            GITHUB
          </a>
        </p>
      </div>
    </div>
  );
};

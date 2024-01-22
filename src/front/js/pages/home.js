import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import heroImgUrl from '../../img/foto-pc.png';
import '../../styles/home.css';

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className='background-container'>
      <div className="container" style={{ maxWidth: '1200px', position: 'relative' }}>
        <div className="hero text-center">
          <div className="container mt-5 mb-5">
            <div className='row align-items-center'>

              <div className='col-lg-6 p-5'>
                <h1 className="hero-title">PET+, el mejor aliado <br /> en el cuidado de <br />tus mascotas</h1>
                <p className="lead text-muted">
                  Registra, controla, y disfruta de la salud de tus mascotas con Pet+.
                  Mantén al día sus vacunas, peso, citas y más. Todo en un solo lugar,
                  su bienestar merece la mejor atención.
                </p>
                <div className='btn-group gap-3'>
                  <button className="button btn text-white rounded-3" type="button">
                    Invitado
                  </button>
                  <button className="btn btn-light text-black rounded-3" type="button">
                    Usuario
                  </button>
                  <button className="btn btn-light text-black rounded-3" type="button">
                    Registrarse
                  </button>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='hero-image'>
                  <img className="img-fluid hero-image" src={heroImgUrl} alt='Picture of pets' />
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
    </div>
  );
};

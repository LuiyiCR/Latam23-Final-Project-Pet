import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import heroImgUrl from '../../img/foto-pc.png';
import { Link } from 'react-router-dom';
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
                <h1 className="hero-title"><span className='header-pet-text'>PET+</span>, el mejor aliado <br /> en el cuidado de <br />tus mascotas</h1>
                <p className="lead text-muted">
                  Registra, controla, y disfruta de la salud de tus mascotas con Pet+.
                  Mantén al día sus vacunas, peso, citas y más. Todo en un solo lugar,
                  su bienestar merece la mejor atención.
                </p>
                <div className='btn-group gap-3'>
                  <button className="button btn text-white rounded-3" type="button">
                    Invitado
                  </button>
                  <Link to="/signup" className="btn btn-light text-black rounded-3"
                    type="button">
                    Registrarse
                  </Link>
                  <button className="btn btn-light text-black rounded-3" type="button"

                  >
                    Entrar
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
            Ingresa y empieza a incluir tus mascotas{' '}
            <a href="#">
              ENTRAR
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

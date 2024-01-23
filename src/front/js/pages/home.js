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
                  <Link to="/guest" className="button btn text-white rounded-3" type="button">
                    Explorar como invitado
                  </Link>
                  <Link to="/login" className="btn btn-light text-black rounded-3" type="button">
                    Iniciar sesión
                  </Link>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='hero-image'>
                  <img className="img-fluid hero-image" src={heroImgUrl} alt='Picture of pets' />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      {/* <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="mb-3">¿Eres veterinario?</h2>
            <p>Como veterinario, puedes...</p>
            <ul>
              <li>Registrar a tus pacientes y llevar un control de su historial clínico.</li>
              <li>Programar recordatorios para las citas de tus pacientes.</li>
              <li>Y mucho más...</li>
            </ul>
            <Link to="/signup" className="btn btn-light text-black rounded-3" type="button">
              Únete ahora
            </Link>
          </div>
          <div className="col-lg-6">
            <img src={heroImgUrl} alt="Imagen de un veterinario" className="img-fluid" />
          </div>
        </div>
      </div> */}

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <h2 className="mb-3">¿Eres veterinario?</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <p>Como veterinario, puedes...</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img src={'img1'} className="card-img-top" alt="Imagen 1" />
              <div className="card-body">
                <p className="card-text">Registrar a tus pacientes y llevar un control de su historial clínico.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={'img2'} className="card-img-top" alt="Imagen 2" />
              <div className="card-body">
                <p className="card-text">Programar recordatorios para las citas de tus pacientes.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={'img3'} className="card-img-top" alt="Imagen 3" />
              <div className="card-body">
                <p className="card-text">Y mucho más...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <Link to="/signup" className="btn btn-light text-black rounded-3" type="button">
              Únete ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

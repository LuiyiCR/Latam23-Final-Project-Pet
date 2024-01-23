import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import heroImgUrl from '../../img/foto-pc.png';
import docImgUrl from '../../img/foto-veterinaria.png'
import docCatImgUrl from '../../img/foto-doc-cat.png'
import docsImgUrl from '../../img/foto-docs.png'
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

      <div className="divider-section">
        <div>
          <i className="fas fa-dog"></i>
          <p>Perros</p>
        </div>
        <div>
          <i className="fas fa-cat"></i>
          <p>Gatos</p>
        </div>
        <div>
          <i className="fas fa-dove"></i>
          <p>Aves</p>
        </div>
        <div>
          <i className="fas fa-paw"></i>
          <p>Otras mascotas</p>
        </div>
      </div>

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
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={docImgUrl} className="card-img-top" alt="Imagen 1" />
              <div className="card-body">
                <p className="card-text">Registrar a tus pacientes y llevar un control de su historial clínico.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={docsImgUrl} className="card-img-top" alt="Imagen 2" />
              <div className="card-body">
                <p className="card-text">Programar recordatorios para las citas de tus pacientes.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={docCatImgUrl} className="card-img-top" alt="Imagen 3" />
              <div className="card-body">
                <p className="card-text">Y mucho más...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center mb-5">
            <Link to="/signup" className="btn btn-light text-black rounded-3" type="button">
              Únete ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

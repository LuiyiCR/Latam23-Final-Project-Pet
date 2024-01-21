import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import heroImgUrl from '../../img/foto-pc.png';
import '../../styles/home.css';

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="hero text-center text-white">
        <div className="container">
          <h1>PET+, el mejor aliado en el cuidado de tus mascotas</h1>
          <h6 className="text-muted">
            Registra, Controla y Disfruta de la Salud de tus Mascotas con Pet+.
            Mantén al Día sus Vacunas, Peso, Citas y más, todo en un solo lugar
            su bienestar merece la mejor atención.
          </h6>
        </div>

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

        <p>
          <img className="hero-images" src={heroImgUrl} />
        </p>

        <p>
          This boilerplate comes with lots of documentation:{' '}
          <a href="https://start.4geeksacademy.com/starters/react-flask">
            Read documentation
          </a>
        </p>
      </div>
    </div>
  );
};

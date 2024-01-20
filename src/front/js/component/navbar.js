import React from 'react';
import { Link } from 'react-router-dom';
import logoImgUrl from '../../img/logo.png';

export const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logoImgUrl} alt="Pet+ Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mis mascotas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Veterinarios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Acerca de nosotros
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <a className="btn btn-outline-primary me-2" href="#">
              Invitado
            </a>
            <a className="btn btn-outline-primary me-2" href="#">
              Entrar
            </a>
            <a className="btn btn-primary" href="#">
              Registrarse
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

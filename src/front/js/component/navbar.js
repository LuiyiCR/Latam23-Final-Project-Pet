import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImgUrl from '../../img/logo.png'
import AboutUs from './AboutUs';

export const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/");
    }

    const isLoggedIn = localStorage.getItem("token") !== null;

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="" type="button">
                    <img className="logo" src={logoImgUrl} alt="Pet+ Logo" />
                </Link>
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
                            <Link to="/" className="nav-link" type="button">
                                Inicio
                            </Link>
                        </li>
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link to="/dashboard" className='nav-link' type='button'>
                                    Mis mascotas
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" type="button">
                                Veterinarios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link" type="button">
                                Acerca de nosotros
                            </Link>
                        </li>
                    </ul>

                    {isLoggedIn ? (
                        <Link to='/' className="btn btn-light text-black rounded-3" onClick={handleLogout}>
                            Logout
                        </Link>
                    ) : (
                        <div className='btn-group gap-3'>
                            <Link to="/guest" className="button btn text-white rounded-3" type="button">
                                Explorar como invitado
                            </Link>
                            <Link to="/login" className="btn btn-light text-black rounded-3" type="button">
                                Iniciar sesión
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

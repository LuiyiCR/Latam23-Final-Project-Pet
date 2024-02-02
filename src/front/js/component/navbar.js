import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImgUrl from '../../img/logo.png';


export const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/");
    }

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

                    {location.pathname === '/dashboard' || location.pathname.startsWith('/pet') ? (
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

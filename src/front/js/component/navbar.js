import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImgUrl from '../../img/logo.png'
import AboutUs from './AboutUs';

export const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const name = localStorage.getItem("name");

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("permision")
        navigate("/");
    }

    const handelInvitado = async ( ) => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: process.env.USER_GUEST,
                    password: process.env.USER_GUEST_PASS
                })
            });
            const data = await response.json();
            if (data === false) {
                return
            }
            const token = data.token;
            localStorage.setItem("token", token);
            localStorage.setItem("name", "Invitado")
            localStorage.setItem("permision", false)
            navigate("/invitado");
        } catch (error) {
            console.error("Error al procesar invitado:", error);
        }
    };

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
                            <Link to="/directory" className="nav-link" type="button">
                                Directorio de Veterinarios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link" type="button">
                                Acerca de nosotros
                            </Link>
                        </li>
                    </ul>

                    {isLoggedIn ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='login-profile-icon' style={{ marginRight: '1rem', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <i className="fas fa-user-circle" style={{ fontSize: '1.9rem' }}></i>
                                <span style={{ marginLeft: '0.5rem' }}>{name}</span>
                            </div>
                            <Link to='/' className="btn btn-light text-black rounded-3" onClick={handleLogout}>
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <div className='btn-group gap-3'>
                            <button className="button btn text-white rounded-3" type="button" onClick={handelInvitado}>
                                Explorar como invitado
                            </button>
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

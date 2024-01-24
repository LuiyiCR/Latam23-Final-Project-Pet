import React, { useState } from "react";
import logo from "../../img/logopetplus.png";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function setEmailValue(event) {
        const value = event.target.value;
        setEmail(value);
    }

    function setPasswordValue(event) {
        const value = event.target.value;
        setPassword(value);
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log("Hola buenos dias")
    }

    return (
        <div className="container-fluid div-signup d-flex align-items-center flex-column">

            {errorMessage && (
                <div className="alert alert-warning error-message" role="alert">
                    {errorMessage}
                </div>
            )}

            <div className="signup-header">
                <img src={logo} />
                <h2>Iniciar Sesion</h2>
            </div>

            <form className="contenedor-form">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off" value={email} onChange={setEmailValue} placeholder="email@email.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="off" value={password} onChange={setPasswordValue} placeholder="*******" />
                </div>

                <button type="submit" className="btn btn-primary boton-signup" onClick={submitHandler}>Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login;
import React, { useState } from "react";
import "../../styles/signup.css";
import logo from "../../img/logo.png";

const BACKEND_URL = process.env.BACKEND_URL;

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Funciones para onChanges en inputs del formulario

    function setNameValue(event) {
        const value = event.target.value;
        setName(value);
    }

    function setEmailValue(event) {
        const value = event.target.value;
        setEmail(value);
    }

    function setPasswordValue(event) {
        const value = event.target.value;
        setPassword(value);
    }

    function setConfirmPasswordValue(event) {
        const value = event.target.value;
        setConfirmPassword(value);
    }

    // Funciones para verificacion de Nombre

    function verifyNameParameters(name) {
        // Expresiones para buscar  un número (Devuelve un valor booleano)
        const contieneNumero = /\d/.test(name);
        const contieneSimbolo = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(name);
        const contieneAlgo = name === "";

        return contieneNumero || contieneSimbolo || contieneAlgo;
    }

    function verifyName() {
        if (verifyNameParameters(name)) {
            setErrorMessage("El nombre que proporcionaste no es valido");
            return false
        }
        return true
    }


    // Funciones para verificaciones de correo electronico

    function verifyEmailParameters() {
        if (email.includes(".com") &&
            email.includes("@") &&
            email.length !== "") {
            return true
        }
        return false
    }

    function verifyEmail() {
        if (verifyEmailParameters()) {
            return true
        }
        setErrorMessage("El Correo electronico que proporcionaste no es valido")
        return false
    }


    // Funciones para verificaciones de contraseña

    function verifyContainsPassword(password) {
        // Expresiones para buscar al menos una letra mayúscula y al menos un número
        var contieneMayuscula = /[A-Z]/.test(password);
        var contieneNumero = /\d/.test(password);

        // Verifica si la contraseña cumple con ambos requisitos
        return contieneMayuscula && contieneNumero;
    }

    function verifyPassowordParameters() {
        if (password.length >= 8 &&
            verifyContainsPassword(password)) {
            return true
        }
        return false
    }

    function comparePasswords() {
        if (password === confirmPassword) {
            return true
        }
        return false
    }

    function verifyPassword() {
        if (!verifyPassowordParameters()) {
            setErrorMessage("Tu contraseña debe ser de almenos 8 caracteres y contener minimo una letra mayuscula y un numero")
            return false
        }
        if (!comparePasswords()) {
            setErrorMessage("Las contraseñas deben coincidir")
            return false
        }
        return true
    }

    //Funcion para realizar el envio de datos a la API

    async function enviarData() {
        const response = await fetch(BACKEND_URL + "/api/user",
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        "name": name,
                        "email": email,
                        "password": password
                    }
                ),
                headers: {
                    'Content-Type': "application/json"
                }
            })
        if (response.status != 201) {
            setErrorMessage("Ocurrio un error al crear tu cuenta, por favor vuelve a intentarlo mas tarde")
            return
        }


    }

    // Funcion onClick para manejar el boton de enviar (submit) / registrarse

    function submitHandler(event) {

        event.preventDefault();

        if (verifyPassword() &&
            verifyName() &&
            verifyEmail()) {
            alert("Registro con exito")
            enviarData()
            return true
        }
        return false

    }

    return (
        <div className="container-fluid div-signup">

            {errorMessage && (
                <div className="alert alert-warning error-message" role="alert">
                    {errorMessage}
                </div>
            )}

            <h2>Crear una cuenta</h2>

            <form className="contenedor-form">
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" autoComplete="off" value={name} onChange={setNameValue} placeholder="cual es tu nombre?" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off" value={email} onChange={setEmailValue} placeholder="email@email.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="off" value={password} onChange={setPasswordValue} placeholder="*******" />
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" autoComplete="off" value={confirmPassword} onChange={setConfirmPasswordValue} placeholder="*******" />
                </div>
                <button type="submit" className="btn btn-primary boton-signup" onClick={submitHandler}>Registrarse</button>
            </form>

        </div>
    )
}

export default Signup;
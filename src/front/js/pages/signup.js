import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import logo from "../../img/logopetplus.png";

const BACKEND_URL = process.env.BACKEND_URL;

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [type, setType] = useState("owner");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

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
            setErrorMessage("Tu contraseña debe ser de al menos 8 caracteres y contener minimo una letra mayuscula y un numero")
            return false
        }
        if (!comparePasswords()) {
            setErrorMessage("Las contraseñas deben coincidir")
            return false
        }
        return true
    }


    //Fucnciones para verificacion de tipo de usuario

    function verifyType(event) {
        const valor = event.target.value;
        setType(valor);
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
        if (response.status === 400) {
            setErrorMessage("El correo electronico ya se encuentra en uso")
            return 400
        }

        if (response.status != 201) {
            setErrorMessage("Ocurrio un error al crear tu cuenta, por favor vuelve a intentarlo mas tarde")
            return 500
        }

        return 201
    }

    // Funcion onClick para manejar el boton de enviar (submit) / registrarse

    async function submitHandler(event) {

        event.preventDefault();

        if (verifyName() &&
            verifyEmail() &&
            verifyPassword()) {

            const statusCode = await enviarData();

            if (statusCode === 201) {
                navigate("/");
                return
            }
            if (statusCode === 400) {
                return
            }

        }
        return

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
                <h2>Crear una cuenta</h2>
            </div>

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
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" autoComplete="off" value={confirmPassword} onChange={setConfirmPasswordValue} placeholder="*******" />
                </div>

                <div className="container-radio mb-4">
                    <div className="container-label-radio">
                        <label className="form-label mb-2">Tipo de usuario</label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={verifyType} value="owner" checked={type === "owner"} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Dueño de mascota
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={verifyType} value="vet" checked={type === "vet"} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Veterinario
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary boton-signup" onClick={submitHandler}>Registrarse</button>
            </form>
        </div>
    )
}

export default Signup;
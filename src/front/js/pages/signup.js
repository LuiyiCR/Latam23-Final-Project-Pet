import React, { useState } from "react";
import "../../styles/signup.css";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
            alert("El nombre que proporcionaste no es valido");
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
        alert("Email invalido")
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
            alert("Tu contraseña debe ser de almenos 8 caracteres y contener minimo una letra mayuscula y un numero")
            return false
        }
        if (!comparePasswords()) {
            alert("Las contraseñas deben coincidir")
            return false
        }
        return true
    }

    // Funcion onClick para manejar el boton de enviar (submit) / registrarse

    function submitHandler(event) {

        event.preventDefault();

        if (verifyPassword() &&
            verifyName() &&
            verifyEmail()) {
            alert("Registro con exito")
            return true
        }
        return false

    }

    return (
        <div className="container-fluid">
            <div className="row div-signup">

                <div className="contenedor-imagenes d-flex justify-content-center col-md-6 col-sm-12">
                    <img src="https://static.vecteezy.com/system/resources/previews/028/597/438/original/cute-cat-jumping-file-no-background-ai-generated-png.png" alt="Gato" style={{ width: '350px', height: 'auto' }} />
                </div>

                <form className="contenedor-form col-md-6 col-sm-12">
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" autoComplete="off" value={name} onChange={setNameValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off" value={email} onChange={setEmailValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="off" value={password} onChange={setPasswordValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" autoComplete="off" value={confirmPassword} onChange={setConfirmPasswordValue} />
                    </div>
                    <button type="submit" className="btn btn-primary boton-signup" onClick={submitHandler}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Signup;
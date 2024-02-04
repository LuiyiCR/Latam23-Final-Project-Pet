import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/signup.css";
import logo from "../../img/logopetplus.png";

const BACKEND_URL = process.env.BACKEND_URL;

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [type, setType] = useState("user");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [alertMessageColor, setalertMessageColor] = useState("alert-danger")
    const [isVeterinarian, setIsVeterinarian] = useState(false);

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

    function setTypeValue(event) {
        const value = event.target.value;
        setType(value);
    }

    function setPhoneValue(event) {
        const value = event.target.value;
        setPhone(value);
    }

    function setAddressValue(event) {
        const value = event.target.value;
        setAddress(value);
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
            !password.includes(" ") &&
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
            setErrorMessage("Tu contraseña debe ser de al menos 8 caracteres, contener minimo una letra mayuscula, un numero y sin espacios en blanco")
            return false
        }
        if (!comparePasswords()) {
            setErrorMessage("Las contraseñas deben coincidir")
            return false
        }
        return true
    }


    //Fucnciones para verificacion de tipo de usuario

    function verifyType() {
        if (type !== "user" && type !== "veterinary") {
            setErrorMessage("Ocurrio un error al crear tu cuenta, por favor vuelve a intentarlo mas tarde");
            return false
        }
        return true
    }


    //Funcion para realizar el envio de datos a la API

    async function enviarData() {
        try {
            const response = await fetch(BACKEND_URL + "/api/user",
                {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            "name": name,
                            "email": email,
                            "password": password,
                            "user_type": type
                        }
                    ),
                    headers: {
                        'Content-Type': "application/json"
                    }
                });

            if (response.status === 400) {
                setErrorMessage("El correo electronico ya se encuentra en uso")
                return 400
            }

            if (response.status != 201) {
                setErrorMessage("Ocurrio un error al crear tu cuenta, por favor vuelve a intentarlo mas tarde")
                return 500
            }

            return 201

        } catch (error) {
            setErrorMessage("Ocurrio un error, vuelva a intentarlo mas tarde");
            window.scrollTo(0, 0);
        }
    }

    // Funcion onClick para manejar el boton de enviar (submit) / registrarse

    async function submitHandler(event) {

        event.preventDefault();

        if (verifyName() &&
            verifyEmail() &&
            verifyPassword() &&
            verifyType()) {

            const statusCode = await enviarData();

            if (statusCode === 201) {
                setalertMessageColor("alert-success")
                setErrorMessage("Registro exitoso, redirigiendo a pantalla de login");
                window.scrollTo(0, 0);
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
                return
            }
            if (statusCode === 400) {
                window.scrollTo(0, 0);
                return
            }

        }
        window.scrollTo(0, 0);
        return

    }

    return (
        <div className="container-fluid div-signup d-flex align-items-center flex-column background-container-forms">

            {errorMessage && (
                <div className={"alert error-message " + alertMessageColor} role="alert">
                    {errorMessage}
                </div>
            )}

            <div className="signup-header mb-3">
                <img src={logo} />
                <h2 className="mt-3">Crear una cuenta</h2>
            </div>

            <form className="contenedor-form mb-5 h-100">
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
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={setTypeValue} value="user" checked={type === "user"} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Dueño de mascota
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={setTypeValue} value="veterinary" checked={type === "veterinary"} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Veterinario
                        </label>
                    </div>
                </div>

                {type === "veterinary" && (
                    <div className="veterinary-form-extension">
                        <div className="mb-3">
                            <label htmlFor="exampleInputNumber" className="form-label">Numero de telefono</label>
                            <input type="tel" className="form-control" id="exampleInputNumber" aria-describedby="nameHelp" autoComplete="off" value={phone} onChange={setPhoneValue} placeholder="6241130987" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputAddress" className="form-label">Direccion</label>
                            <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="nameHelp" autoComplete="off" value={address} onChange={setAddressValue} placeholder="Escalinata Roberto Pichardo 2600, Nuevo Leon" />
                        </div>
                    </div>
                )}



                <button type="submit" className="btn btn-primary boton-signup" onClick={submitHandler}>Registrarse</button>
            </form>

            <div className="question-mark">
                <div>
                    Ya estas registrado? <Link to={"/login"}>Iniciar Sesion</Link>
                </div>
            </div>

        </div>
    )
}

export default Signup;
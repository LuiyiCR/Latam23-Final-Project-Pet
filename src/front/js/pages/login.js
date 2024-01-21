import React from "react";
import "../../styles/login.css";
import logo from "../../img/logo.png";

const Login = () => {
    return (
        <div className="container d-flex justify-content-evenly align-items-center">
            <div className="login-imagenes d-flex flex-column">
                <img src={logo} alt="Logo pet+" style={{ width: '300px', height: 'auto' }} />
                <img src="https://static.vecteezy.com/system/resources/previews/028/597/438/original/cute-cat-jumping-file-no-background-ai-generated-png.png" alt="Gato" style={{ width: '450px', height: 'auto' }} />
            </div>

            <form>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput" className="form-label" >Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword" className="form-label">Password</label>
                </div>
            </form>
        </div>
    )
}

export default Login;
import React, { useState } from "react";
import "../../styles/signup.css";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

    return (
        <div className="container-fluid">
            <div className="row div-signup">

                <div className="contenedor-imagenes d-flex justify-content-center col-md-6 col-sm-12">
                    <img src="https://static.vecteezy.com/system/resources/previews/028/597/438/original/cute-cat-jumping-file-no-background-ai-generated-png.png" alt="Gato" style={{ width: '350px', height: 'auto' }} />
                </div>

                <form className="contenedor-form col-md-6 col-sm-12">
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" autocomplete="off" value={name} onChange={setNameValue} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off" value={email} onChange={setEmailValue} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" autocomplete="off" value={password} onChange={setPasswordValue} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword2" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" autocomplete="off" value={confirmPassword} onChange={setConfirmPasswordValue} />
                    </div>
                    <button type="submit" className="btn btn-primary boton-signup">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Signup;
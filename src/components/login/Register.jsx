import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import registerIcon from "../../assets/image/register.svg";
import "../../assets/styles/components/login/Register.scss";

const Register = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInput = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(form)
    }
    
  return (
    <section className="register">
      <section className="register__container">
        <center>
            <img className="register-logo" src={registerIcon} alt="Logo" />
            <h2>Regístrate</h2>
        </center>
        <form className="register__container--form" onSubmit={handleSubmit}>
            <div>
                <FontAwesomeIcon icon={faUser} size="lg" />
                <input name="name" className="input" type="text" placeholder="Nombre" value={form.name} onChange={handleInput} />
            </div>
            <div>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <input name="email" className="input" type="text" placeholder="Correo" value={form.email} onChange={handleInput}/>
            </div>
            <div>
                <FontAwesomeIcon icon={faLock} size="lg" />
                <input name="password" className="input" type="password" placeholder="Contraseña" value={form.password} onChange={handleInput}/>
            </div>          
          <button className="button">Registrarme</button>
        </form>
        <br/>
        <Link to="/"><b>Iniciar sesión</b></Link>
      </section>
    </section>
  );
};

export default Register;

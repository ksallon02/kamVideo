import React, { useState } from "react";
import logo from "../../assets/image/logo.svg";
import "../../assets/styles/components/login/Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import ErrorInput from "../ErrorInput";
import { EmailRules, PasswordRules } from "./LoginRules";
import { Link } from "react-router-dom";
import {useGetAllUsers} from "../../hook/useDataAcces";

const validateUser = (userValid, data) => {
  let _ = require('lodash');
  let token = false;
  _.findIndex(userValid, user => {
    if(_.isEqual(data, user.login)){
      token = JSON.stringify(user);
    }
  });
  return token;
}

const Login = ({ setToken }) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [showError, setShowError] = useState(false);
  const userValid = useGetAllUsers();

  const postSubmit = (data) => {
    let token = validateUser(userValid, data);    
    if(token){
      sessionStorage.setItem("token", token);
      setToken(token);
      window.location.href = '/Dashboard';
    } else{
      setShowError(true);
    }
  }

  return (
    <div className="login">
      <section className="login">
        <section className="login__container">
          <center>
            <img className="login-logo" src={logo} alt="Logo" />
            <h2>Inicia sesión</h2>
          </center>          
          <form className="login__container--form" onSubmit={handleSubmit(postSubmit)}>
            {showError && <React.Fragment><span className="errorMessage"><FontAwesomeIcon icon={faExclamationTriangle}/> Usuario no registrado</span><br/></React.Fragment>}
            <div className="">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              {/* <input required title="Email Invalido" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="input" type="text" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} value={email} /> */}
              <input className="input" type="text" placeholder="Correo" {...register("email", EmailRules)}/>
              <ErrorInput errors={errors} name="email"/>
            </div>
            <div className="">              
              <FontAwesomeIcon icon={faLock} size="lg" />
              {/* pattern -> Se utiliza para validar el input, puede definirse una expresion regular
                  title -> Es el mensaje que se muestra cuando no cumpla la validacion pattern
              */}
              {/* <input title="5 o mas caracteres" pattern=".{5,}" name="password" className="input" type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password} /> */}
              <input className="input" type="password" placeholder="Contraseña" {...register("password", PasswordRules)}/>
              <ErrorInput errors={errors} name="password"/>
            </div>
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to="/Register">Regístrate</Link>
          </p>
        </section>
      </section>
    </div>
  );
};

export default Login;

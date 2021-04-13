import React, { useState } from "react";
import logo from "../../assets/image/logo.png";
import "../../assets/styles/components/login/Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import ErrorInput from "../ErrorInput";
import { EmailRules, PasswordRules } from "./LoginRules";
import Apis from "../../Apis.json";
import useFindUsers from "../../hook/useFindUsers";


const Login = ({ setToken }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  let _ = require('lodash');
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [showError, setShowError] = useState(false);
  const userValid = useFindUsers(Apis.db);
  
  const postSubmit = (data) => {
    _.findIndex(userValid, user => {    
      if(_.isEqual(data, user.login)){
        sessionStorage.setItem("token", JSON.stringify(user));
        setToken(data);
        window.location.href = '/Dashboard';      
      } else{
        setShowError(true);
      }
    });
  }

  return (
    <div className="login">
      <section className="login">
        <section className="login__container">
          <img src={logo} alt="Logo" />
          <h2>Inicia sesión</h2>
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
            No tienes ninguna cuenta <a href="/">Regístrate</a>
          </p>
        </section>
      </section>
    </div>
  );
};

export default Login;

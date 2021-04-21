import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import registerIcon from "../../assets/image/register.svg";
import "../../assets/styles/components/login/Register.scss";
import { addNewUser, validateExistUser } from "../../dataAccess/Users";

const Register = () => {
  const [showError, setShowError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    validateExistUser(form.email, (exist) => {
      if (exist) {
        setShowError(true);
      } else {
        addNewUser(form);
        history.push("/");
      }
    });
  };

  return (
    <section className="register">
      <section className="register__container">
        <center>
          <img className="register-logo" src={registerIcon} alt="Logo" />
          <h2>Regístrate</h2>
        </center>
        <form className="register__container--form" onSubmit={handleSubmit}>
          { showError && (
            <React.Fragment>
              <span className="errorMessage">
                <FontAwesomeIcon icon={faExclamationTriangle} /> Email ya se encuentra registrado
              </span>
              <br />
            </React.Fragment>
          )}
          <div>
            <FontAwesomeIcon icon={faUser} size="lg" />
            <input
              required
              title="Ingrese el Apellido"
              pattern="\w.*\s.*\w"
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              value={form.name}
              onChange={handleInput}
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <input
              required
              title="Email con formato incorrecto"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              value={form.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faLock} size="lg" />
            <input
              required
              title="5 o mas caracteres"
              pattern=".{5,}"
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleInput}
            />
          </div>
          <button className="button">Registrarme</button>
        </form>
        <br />
        <Link to="/">
          <b>Iniciar sesión</b>
        </Link>
      </section>
    </section>
  );
};

export default Register;

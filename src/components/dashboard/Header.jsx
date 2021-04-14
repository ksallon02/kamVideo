import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/components/dashboard/Header.scss'
import logo from "../../assets/image/logo.svg";
import userIcon from "../../assets/image/user-icon.png";

const Header = () => {
    return (
        <header className="header pepe">
            <Link to="/Dashboard"><img className="header__img" src={logo} alt="Kam Video"/></Link>
            <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><Link to="/Profile">Cuenta</Link></li>
                <li><a href="/" onClick={() => sessionStorage.removeItem('token')}>Cerrar Sesión</a></li>
            </ul>
            </div>
        </header>
    );
}

export default Header;
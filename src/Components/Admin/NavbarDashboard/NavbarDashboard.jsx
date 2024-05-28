import React, { useState, useEffect } from 'react'
import './NavbarDashboard.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBook, faImage, faAddressBook, faTachometerAlt, faCode, faMessage } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png'
import Logout from '../Logout/Logout';

export default function Navbar() {
    const location = useLocation();


    return (

        <div class="navbarDashboard" >
            <Anchor className='logo'>
                <img src={logo} alt="logo" />

            </Anchor>
            <div className='links'>
                <Anchor to={`/dashboard`} className={location.pathname === '/dashboard' ? 'activeLink' : ''}><FontAwesomeIcon icon={faHome} /> Inicio</Anchor>
                <Anchor to={`/dashboard/usuarios`} className={location.pathname === '/dashboard/usuarios' ? 'activeLink' : ''}><FontAwesomeIcon icon={faUser} /> Usuarios</Anchor>
                <Anchor to={`/dashboard/consultas`} className={location.pathname === '/dashboard/consultas' ? 'activeLink' : ''}><FontAwesomeIcon icon={faMessage} /> Consultas</Anchor>
                <Anchor to={`/`} className={location.pathname === '/' ? 'activeLink' : ''}><FontAwesomeIcon icon={faBook} />Invertir</Anchor>
            </div>

            <Logout />

        </div>

    );
}

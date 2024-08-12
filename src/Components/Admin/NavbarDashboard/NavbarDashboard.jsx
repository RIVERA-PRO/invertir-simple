import React, { useState, useEffect } from 'react'
import './NavbarDashboard.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBook, faImage, faAddressBook, faTachometerAlt, faVideo, faMessage } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/icon.PNG'
import Logout from '../Logout/Logout';
import baseURL from '../../url';
export default function Navbar() {
    const location = useLocation();
    const [usuario, setUsuario] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseURL}/userLogued.php`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsuario(data);
                setLoading(false);

            } catch (error) {
                console.error('Error al obtener datos:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (

        <div class="navbarDashboard" >
            <Anchor className='logo'>
                <img src={logo} alt="logo" />

            </Anchor>
            <div className='links'>
                <Anchor to={`/dashboard`} className={location.pathname === '/dashboard' ? 'activeLink' : ''}><FontAwesomeIcon icon={faHome} /> Inicio</Anchor>

                {loading ? (
                    <></>
                ) : usuario?.idUsuario ? (
                    <>
                        {usuario?.rol === 'admin' ? (
                            <>  <Anchor to={`/dashboard/usuarios`} className={location.pathname === '/dashboard/usuarios' ? 'activeLink' : ''}><FontAwesomeIcon icon={faUser} /> Usuarios</Anchor>
                                <Anchor to={`/dashboard/consultas`} className={location.pathname === '/dashboard/consultas' ? 'activeLink' : ''}><FontAwesomeIcon icon={faMessage} /> Consultas</Anchor>
                                <Anchor to={`/dashboard/banners`} className={location.pathname === '/dashboard/banners' ? 'activeLink' : ''}><FontAwesomeIcon icon={faImage} /> Banners</Anchor>
                                <Anchor to={`/dashboard/videos`} className={location.pathname === '/dashboard/videos' ? 'activeLink' : ''}><FontAwesomeIcon icon={faVideo} /> Videos</Anchor>
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <></>
                )}
                <Anchor to={`/`} className={location.pathname === '/' ? 'activeLink' : ''}><FontAwesomeIcon icon={faBook} />Invertir</Anchor>
            </div>

            <Logout />

        </div>

    );
}

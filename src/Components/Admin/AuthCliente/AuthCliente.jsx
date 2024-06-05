import React, { useState, useEffect } from 'react';
import { Link as Anchor } from 'react-router-dom';
import LoginCliente from '../LoginCliente/LoginCliente';
import RegisterCliente from '../RegisterCliente/RegisterCliente';
import './AuthCliente.css';
import user from '../../../images/user.png';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import InfoUserMain from '../InfoUserMain/InfoUserMain';
import baseURL from '../../url';
import Spiner from '../../Admin/Spiner/Spiner';
import Logout from '../../Admin/Logout/Logout';

export default function AuthCliente() {
    const [showLogin, setShowLogin] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [usuario, setUsuario] = useState({});
    const [loading, setLoading] = useState(true);

    const openLoginModal = () => {
        setShowLogin(true);
        setModalContent('login');
        setIsOpen(true);
    };

    const openRegisterModal = () => {
        setShowLogin(false);
        setModalContent('register');
        setIsOpen(true);
    };

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
        <div className='AuthContainerClient'>
            <button onClick={openRegisterModal} className='authButtonRegister'>Abrí tu cuenta</button>
            <button onClick={openLoginModal} className='authButtonLogin'>Ingresar</button>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className="modalAuth"
                overlayClassName="overlayAuth"
            >
                <div className="modalAuth-content">
                    <div className='deFlexModal'>
                        <span onClick={() => setIsOpen(false)} className="closeModal">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </span>
                        <h3>Mi cuenta</h3>
                    </div>
                    {loading ? (
                        <Spiner />
                    ) : usuario.idUsuario ? (
                        <>
                            <InfoUserMain />
                            <Logout />
                        </>
                    ) : (
                        <>
                            <Anchor to={`/`}>
                                <img src={user} alt="imagen" className='logoAtuh' />
                            </Anchor>
                            {modalContent === 'login' ? <LoginCliente /> : <RegisterCliente />}
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
}

import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { Link as Anchor } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import './Navbar.css'
import contact from '../contact'
import logo from '../../images/logo.png'
import AuthCliente from '../Admin/AuthCliente/AuthCliente'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset;

            // Define una altura de desplazamiento a partir de la cual se aplica el estilo de scroll
            const scrollThreshold = 50;

            if (scrollTop > scrollThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className={isScrolled ? 'nav-scroll' : ''}>

                <Anchor to={`/`} className='logo'>
                    <img src={logo} alt="imagen" className='logoAtuh' />
                </Anchor>



                <div className='enlaces'>
                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('#swiper_container').scrollIntoView({ behavior: 'smooth' });
                    }}>Inicio</Anchor>

                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('.About').scrollIntoView({ behavior: 'smooth' });
                    }}> Nosotros</Anchor>
                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('.ServiciosContain').scrollIntoView({ behavior: 'smooth' });
                    }}>Servicios</Anchor>

                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('.FooterContain').scrollIntoView({ behavior: 'smooth' });
                    }}> Contacto</Anchor>
                    <Anchor to={`/calcula-tu-ahorro`} onClick={() => {

                        setIsOpen(!isOpen);
                    }}> Calculá</Anchor>
                </div>

                <div className='deNoneNav'>
                    <AuthCliente />

                </div>
                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    className="modalNav"
                    overlayClassName="overlay"
                >
                    <div className="modalNav-content">
                        <div className='bgNav'>

                            <Anchor to={`/`} className='logo'>
                                <img src={logo} alt="imagen" className='logoAtuh' />
                            </Anchor>
                        </div>
                        <div className='enlaces2'>
                            <Anchor to={`/`} onClick={() => {
                                document.querySelector('#swiper_container').scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(!isOpen);
                            }} >Inicio</Anchor>
                            <Anchor to={`/`} onClick={() => {
                                document.querySelector('.About').scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(!isOpen);
                            }}> Nosotros</Anchor>
                            <Anchor to={`/`} onClick={() => {
                                document.querySelector('.ServiciosContain').scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(!isOpen);
                            }}>Servicios</Anchor>


                            <Anchor to={`/`} onClick={() => {
                                document.querySelector('.FooterContain').scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(!isOpen);
                            }}> Contacto</Anchor>
                            <Anchor to={`/calcula-tu-ahorro`} onClick={() => {

                                setIsOpen(!isOpen);
                            }}> Calculá</Anchor>
                            <div className='deFLexNavs'>
                                <AuthCliente />

                            </div>
                        </div>


                    </div>
                </Modal>
            </nav>

        </header>
    );
}

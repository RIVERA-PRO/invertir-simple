import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { Link as Anchor } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import './Navbar.css'
import contact from '../contact'
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
                    <h1>Invertir Simple</h1>
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

                </div>
                <AuthCliente />
                {/* <div className='deNoneNav'>

                    {
                        contact.map(item => (
                            <div class="redes-sociales">
                                <Anchor to={item.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                                <Anchor to={`tel:${item.telefono}`} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                                <Anchor to={item.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
                            </div>
                        ))
                    }
                </div> */}
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
                                <h1>Invertir Simple</h1>
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

                        </div>

                    </div>
                </Modal>
            </nav>

        </header>
    );
}

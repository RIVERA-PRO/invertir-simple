import React from 'react';
import './Footer.css'
import { Link as Anchor } from 'react-router-dom';
import contact from '../contact'
export default function Footer() {



    return (
        <div className='FooterContain'>
            <div className='Footer'>
                <div className='footerText'>
                    <h1 className='logoFooter'>  Invertir Simple</h1>

                    {
                        contact.map(item => (
                            <div className='socials'>
                                <Anchor to={item.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                                <Anchor to={`tel:${item.telefono}`} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                                <Anchor to={item.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
                            </div>
                        ))
                    }

                </div>
                <div className='footerText'>
                    <h3>Nosotros</h3>
                    <p  >Invertir Simple es nuestra empresa dedicada a brindar servicios financieros. Te acercamos al mundo de las finanzas de manera SIMPLE</p>
                </div>
                <div className='footerText'>
                    <h3>Contacto</h3>
                    {
                        contact.map(item => (
                            <div className='footerText'>
                                <Anchor to={`mailto:${item.email}`} target="_blank">{item.email}</Anchor>
                                <Anchor to={`tel:${item.telefono}`} target="_blank">{item.telefono}</Anchor>
                                <Anchor to={`https://www.google.com/maps?q=${encodeURIComponent(item.direccion)}`} target="_blank">{item.direccion}</Anchor>
                            </div>
                        ))
                    }

                </div>
                <div className='footerText'>
                    <h3>Enlaces</h3>
                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('#swiper_container').scrollIntoView({ behavior: 'smooth' });
                    }}>Inicio</Anchor>

                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('.About').scrollIntoView({ behavior: 'smooth' });
                    }}> Nosotros</Anchor>
                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('.ServiciosContain').scrollIntoView({ behavior: 'smooth' });
                    }}>Servicios</Anchor>


                </div>
            </div>
            <p className='COPYRIGHT'>© COPYRIGHT 2024 - INVERTIR SIMPLE </p>
        </div>
    )
}

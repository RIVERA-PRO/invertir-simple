import React from 'react'
import './About.css'
import img from '../../images/about.jpg'
import BtnContact from '../BtnContact/BtnContact';
export default function About() {
    return (
        <div className='About'>
            <img src={img} alt="image about" />
            <div className='abouText'>
                <h1>¿Quiénes somos?</h1>
                <p>INVERTIR SIMPLE es nuestra empresa dedicada a brindar servicios financieros.

                    Te acercamos al mundo de las finanzas de manera SIMPLE.

                    Asesoramos para que tomes decisiones de ahorro y financieras de forma más SIMPLE y efectiva.

                    Somos una empresa regional con más de 10 años de experiencia en el mercado de capitales.

                    Tenemos una propuesta innovadora, absolutamente transparente y por sobre todo segura para tus ahorros. </p>


                <h3>OBJETIVO</h3>
                <p>Nuestro objetivo es ayudarte a que puedas INVERTIR de manera SIMPLE, sin necesidad de que seas un experto en la materia. ¡Anímate!</p>

                <h3>¿POR QUÉ INVERTIR SIMPLE?</h3>
                <p>Es totalmente gratis, sin costos de mantenimiento y recibirás un asesoramiento permanente y especializado.

                </p>
                <BtnContact />
            </div>
        </div>
    )
}

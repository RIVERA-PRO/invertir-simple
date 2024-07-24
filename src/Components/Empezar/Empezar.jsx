import React from 'react'
import './Empezar.css'
import img from '../../images/inverir.jpg'
import BtnContact from '../BtnContact/BtnContact';
import { Link as Anchor } from 'react-router-dom';
export default function Empezar() {
    return (
        <div className='About'>
            <div className='abouText'>
                <h1>¿Cómo empezar a invertir?</h1>
                <p>
                    ¡Abrir una cuenta en INVERTIRSIMPLE.AR es fácil y gratuito!

                    Solamente necesitas tener documento argentino, ser mayor de edad y una cuenta bancaria CBU o CVU a tu nombre.</p>


                <h3>¡NECESITAMOS CONOCERTE!</h3>
                <p>Para ello, completá el siguiente TEST del inversor. Esta herramienta nos permitirá conocer tu perfil y poder asesorarte de forma correcta.</p>
                <p>Una vez realizado el test, nos pondremos en contacto para conocer mejor tus necesidades, ideas, planes, objetivos, etc.</p>
                <Anchor to={`/perfil-de-inversor`} className='BtnContact'>
                    Realizar test
                </Anchor>
            </div>
            <img src={img} alt="image about" />
        </div >
    )
}

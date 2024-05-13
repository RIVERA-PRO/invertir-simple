import React from 'react'
import './ContactoPage.css'
export default function ContactoPage() {
    return (
        <div className='ContactoPage'>
            <h1>Contáctenos</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.15975796667!2d-65.3049951248154!3d-26.83283503327894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1711044962332!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className='contactText'>
                <div className='contactTextCard'>
                    <h3>Llámenos:</h3>
                    <p>Estamos disponibles 24 horas al día, 7 días a la semana, 7 días a la semana.</p>
                    <strong>+08 9229 8228</strong>

                </div>
                <div className='contactTextCard'>
                    <h3>Escríbenos:</h3>
                    <p>Rellena nuestro formulario y nos pondremos en contacto contigo en un plazo de 24 horas.</p>
                    <strong>Support1234@Jaroti</strong>

                </div>
                <div className='contactTextCard'>
                    <h3>Sede:</h3>
                    <p>Lunes – Viernes: 9:00-20:00
                        Sábado: 11:00 – 15:00

                    </p>
                    <strong> 123 Atlantic, Brooklyn, Nueva York, EE. UU.</strong>

                </div>
            </div>


            <div className='contactFlex'>
                <div className='contactFlexText'>
                    <h2>Nos encantaría saber de usted.</h2>
                    <form action="" className='formContact'>
                        <input type="text" placeholder='nombre' />
                        <input type="text" placeholder='correo electronico' />
                        <input type="text" placeholder='sujeto' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
                        <button>Enviar Mensaje</button>
                    </form>
                </div>


                <div className='contactFlexText'>
                    <h2>¿Tiendas fuera de línea?</h2>
                    <div className='cardForm'>
                        <h3>Dirección 1</h3>
                        <p>123 Atlantic, Brooklyn, Nueva York, EE. UU.
                            (+403) 374 748 3839</p>
                        <span>Lunes – Viernes: 9:00 – 21:00
                            Sábado: 11:00 – 21:00</span>

                    </div>
                    <div className='cardForm'>
                        <h3>Dirección 2</h3>
                        <p>345 Brick, Spitalfields, Londres, Reino Unido
                            (+403) 374 748 3839</p>
                        <span>Lunes – Viernes: 9:00 – 21:00
                            Sábado: 11:00 – 21:00</span>

                    </div>
                    <div className='cardForm'>
                        <h3>Dirección 3</h3>
                        <p>Knight Valley Dr, Nashville, EE. UU.
                            (+403) 374 748 3839</p>
                        <span>Lunes – Viernes: 9:00 – 21:00
                            Sábado: 11:00 – 21:00</span>

                    </div>

                </div>

            </div>

        </div>
    )
}

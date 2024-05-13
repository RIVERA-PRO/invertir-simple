import React from 'react';
import './Servicios.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHandHoldingUsd, faShieldAlt } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos que necesitas
import BtnContact from '../BtnContact/BtnContact';
import TitleSection from '../TitleSection/TitleSection';

export default function Servicios() {
    const servicios = [
        { title: 'INVERSIONES', text: 'Inversiones financieras en el mercado de capitales nacional e internacional.', icon: faChartLine },
        { title: 'FINANCIAMIENTO', text: 'Conocemos las mejores herramientas para lograr el financiamiento de tu pyme.', icon: faHandHoldingUsd },
        { title: 'PROTECCION DE ACTIVOS', text: 'Te asesoramos para que cuides lo tuyo.', icon: faShieldAlt },
    ];

    return (
        <div className='ServiciosContain'>
            <TitleSection section="Nuestros servicios" text="Nos dedicamos a asesorar financieramente tanto a cuentas personales, como a empresas." />
            <div className='cards'>
                {servicios.map((servicio, index) => (
                    <div className="servicios-card" key={index}>
                        <FontAwesomeIcon icon={servicio.icon} size="3x" className='ICON' />
                        <h3>{servicio.title}</h3>
                        <p>{servicio.text}</p>
                    </div>
                ))}
            </div>
            <h4>En todos los casos establecemos estrategias en función de tus necesidades y objetivos a efectos de maximizar las rentabilidades de tus inversiones</h4>
        </div>
    );
}

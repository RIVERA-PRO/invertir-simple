import React from 'react'
import './SectionContact.css'
import contact from '../contact';
import whatsappIcon from '../../images/wpp.png';
export default function SectionContact() {
    const handleWhatsappMessage = () => {

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${contact[0].telefono}`;

        window.open(whatsappUrl, '_blank');

    };
    return (
        <div className='SectionContact'>
            <h2>Ponte en contacto con nosotros</h2>
            <button onClick={handleWhatsappMessage}>
                WhatsApp <img src={whatsappIcon} alt="" />
            </button>

        </div>
    )
}

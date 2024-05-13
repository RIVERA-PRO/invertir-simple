import React from 'react'
import { Link as Anchor } from 'react-router-dom';
import './BtnContact.css'
import contact from '../contact';
export default function BtnContact() {
    const handleWhatsappMessage = () => {

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${contact[0].telefono}`;

        window.open(whatsappUrl, '_blank');

    };
    return (
        <Anchor to={`/`} className='BtnContact' onClick={handleWhatsappMessage}>
            Contactar
        </Anchor>

    )
}

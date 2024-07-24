import React from 'react';
import Nabvar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Banners from '../Components/Banners/Banners'
import Servicios from '../Components/Servicios/Servicios';
import About from '../Components/About/About';
import BtnWhatsapp from '../Components/BtnWhatsapp/BtnWhatsapp';
import Planes from '../Components/Planes/Planes';
import Empezar from '../Components/Empezar/Empezar';
import Aliados from '../Components/Aliados/Aliados';
import SectionContact from '../Components/SectionContact/SectionContact';
import TitleSection from '../Components/TitleSection/TitleSection';
export default function IndexLayout() {




    return (
        <div >
            <Nabvar />
            <Banners />
            <About />
            <Empezar />
            <SectionContact />
            <Servicios />
            <Planes />
            <TitleSection section="MP 1941 Agente productor CNV" />
            <Aliados />
            <Footer />
            <BtnWhatsapp />
        </div>
    );
}

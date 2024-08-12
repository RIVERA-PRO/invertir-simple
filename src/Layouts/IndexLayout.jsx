import React from 'react';
import Nabvar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Banners from '../Components/Banners/Banners';
import Servicios from '../Components/Servicios/Servicios';
import About from '../Components/About/About';
import BtnWhatsapp from '../Components/BtnWhatsapp/BtnWhatsapp';
import Planes from '../Components/Planes/Planes';
import Empezar from '../Components/Empezar/Empezar';
import Aliados from '../Components/Aliados/Aliados';
import SectionContact from '../Components/SectionContact/SectionContact';
import TitleSection from '../Components/TitleSection/TitleSection';
import BannersModal from '../Components/BannersModal/BannersModal';
export default function IndexLayout() {

    const handleTitleSectionClick = () => {
        window.open('https://www.cnv.gov.ar/SitioWeb/RegistrosPublicos/Idoneos', '_blank');
    };

    return (
        <div>
            <Nabvar />
            <Banners />
            <About />
            <Empezar />
            <SectionContact />
            <Servicios />
            <Planes />
            <div className='ServiciosContain' onClick={handleTitleSectionClick}>
                <TitleSection
                    section="MP 1941 Agente productor CNV"
                    text='La idoneidad es un requisito que se exige a quienes desempeñen las actividades de venta, promoción o prestación de cualquier tipo de asesoramiento al público inversor, para garantizar que cuentan con el nivel de competencia e integridad requerido. De esta manera, el Registro de Idóneos, refleja a aquellas personas físicas con idoneidad aprobada por la CNV para asesorar al público inversor a través de un Agente autorizado.'

                />
            </div>
            <Aliados />
            <Footer />
            <BannersModal />
            <BtnWhatsapp />
        </div>
    );
}

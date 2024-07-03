import React, { useState } from 'react';
import CalculoAhorro from '../../Components/CalculoAhorro/CalculoAhorro';
import CalculoMeta from '../../Components/CalculoAhorro/CalculoMeta';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './CalculaPage.css'
export default function CalculaPage() {
    const [activeComponent, setActiveComponent] = useState('ahorro');
    const [activeButton, setActiveButton] = useState('ahorro');

    const handleShowAhorro = () => {
        setActiveComponent('ahorro');
        setActiveButton('ahorro');
    };

    const handleShowMeta = () => {
        setActiveComponent('meta');
        setActiveButton('meta');
    };

    return (
        <div >
            <Navbar />
            <div className="button-container">
                <div className="buttons">
                    <button
                        className={activeButton === 'ahorro' ? 'button bg-active' : 'button'}
                        onClick={handleShowAhorro}
                    >
                        Calculo Ahorro
                    </button>
                    <button
                        className={activeButton === 'meta' ? 'button bg-active2' : 'button'}
                        onClick={handleShowMeta}
                    >
                        Calculo Meta
                    </button>
                </div>
            </div>
            {activeComponent === 'ahorro' ? <CalculoAhorro /> : <CalculoMeta />}
            <Footer />
        </div>
    );
}

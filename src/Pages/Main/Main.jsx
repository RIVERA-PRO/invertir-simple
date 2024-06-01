import React, { useState, useEffect } from 'react';
import './Main.css'
import Header from '../Header/Header'
import HeaderDash from '../../Components/Admin/HeaderDash/HeaderDash'
import ConsultasMain from '../../Components/Admin/ConsultasMain/ConsultasMain'
import UsuariosMain from '../../Components/Admin/UsuariosMain/UsuariosMain'
import CardsCantidad from '../../Components/Admin/CardsCantidad/CardsCantidad'
import InfoUserMain from '../../Components/Admin/InfoUserMain/InfoUserMain'
import baseURL from '../../Components/url';
import MainCliente from '../../Components/Admin/MainCliente/MainCliente';
export default function Main() {
    const [usuario, setUsuario] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseURL}/userLogued.php`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsuario(data);
                setLoading(false);

            } catch (error) {
                console.error('Error al obtener datos:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='containerGrid'>
            <Header />

            {loading ? (
                <></>
            ) : usuario.idUsuario ? (
                <>
                    {usuario.rol === 'admin' ? (
                        <section className='containerSection'>
                            <HeaderDash />
                            <div className='containerMain'>
                                <div className='deFLexMain'>
                                    <CardsCantidad />
                                    <UsuariosMain />
                                </div>
                                <div className='deFLexMain'>
                                    <ConsultasMain />
                                    <InfoUserMain />
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section className='containerSection'>
                            <div className='containerMain'>
                                <MainCliente />
                            </div>
                        </section>

                    )}
                </>
            ) : (
                <section className='containerSection'>

                    <div className='containerMain'>
                        <MainCliente />

                    </div>
                </section>
            )}

        </div>
    )
}

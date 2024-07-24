import React, { useState, useEffect } from 'react';
import Header from '../Header/Header'
import MainCliente from '../../Components/Admin/MainCliente/MainCliente'
import HeaderDash from '../../Components/Admin/HeaderDash/HeaderDash'
import baseURL from '../../Components/url';
import SinPermisos from '../../Components/SinPermisos/SinPermisos';
export default function Videos() {
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
                            <MainCliente />
                        </section>
                    ) : (
                        <SinPermisos />
                    )}
                </>
            ) : (
                <SinPermisos />
            )}

        </div>
    )
}


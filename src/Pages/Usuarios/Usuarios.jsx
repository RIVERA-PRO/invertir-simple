import React, { useState, useEffect } from 'react';
import './Usuarios.css'
import Header from '../Header/Header'
import UsuariosData from '../../Components/Admin/UsuariosData/UsuariosData'
import HeaderDash from '../../Components/Admin/HeaderDash/HeaderDash'
import baseURL from '../../Components/url';
import SinPermisos from '../../Components/SinPermisos/SinPermisos';
export default function Usuarios() {
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
                            <div className='container'>
                                <UsuariosData />
                            </div>
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

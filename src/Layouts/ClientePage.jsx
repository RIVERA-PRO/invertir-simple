import React, { useState, useEffect } from 'react';
import Spiner from '../Components/Admin/Spiner/Spiner';
import { Outlet } from 'react-router-dom';
import AuthCliente from '../Components/Admin/AuthCliente/AuthCliente';
import baseURL from '../Components/url';
export default function ClientePage() {
    const [cliente, setCliente] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseURL}/clientLogued.php`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCliente(data);
                setLoading(false);

            } catch (error) {
                console.error('Error al obtener datos:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div>


                {loading ? (
                    <Spiner />
                ) : cliente.idCliente ? (
                    <>
                        <Outlet />
                    </>
                ) : (
                    <AuthCliente />
                )}
            </div>

        </div>
    );
}

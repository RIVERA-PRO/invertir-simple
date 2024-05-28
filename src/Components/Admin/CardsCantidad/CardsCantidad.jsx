import React, { useEffect, useState } from 'react';
import './CardsCantidad.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faImage, faAddressBook, faTachometerAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link as Anchor } from "react-router-dom";
import baseURL from '../../url';
export default function CardsCantidad() {
    const [consultas, setConsultas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
        cargarConsultas();
        cargarUsuarios();
    }, []);

    const cargarConsultas = () => {
        fetch(`${baseURL}/consultaGet.php`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setConsultas(data.consultas || []);
            })
            .catch(error => console.error('Error al cargar consultas:', error));
    };


    const cargarUsuarios = () => {
        fetch(`${baseURL}/usuariosGet.php`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setUsuarios(data.usuarios || []);
            })
            .catch(error => console.error('Error al cargar usuarios:', error));
    };


    return (
        <div className='CardsCantidad'>

            <Anchor to={`/dashboard/usuarios`} className='cardCantidad'>
                <FontAwesomeIcon icon={faUser} className='icons' />
                <div className='deColumn'>

                    <h3>Usuarios</h3>
                    <h2>{usuarios.length}</h2>
                </div>

            </Anchor>
            <Anchor to={`/dashboard/consultas`} className='cardCantidad' >
                <FontAwesomeIcon icon={faBook} className='icons' />
                <div className='deColumn'>

                    <h3>Consultas</h3>
                    <h2>{consultas.length}</h2>
                </div>

            </Anchor>



        </div>
    )
}

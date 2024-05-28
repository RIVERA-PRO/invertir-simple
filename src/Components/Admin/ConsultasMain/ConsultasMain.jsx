import React, { useEffect, useState } from 'react';
import { Link as Anchor } from "react-router-dom";
import './ConsultasMain.css'
import baseURL from '../../url';
export default function ConsultasMain() {
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        cargarConsulta();
    }, []);



    const cargarConsulta = () => {
        fetch(`${baseURL}/consultaGet.php`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setConsultas(data.consultas || []);
                console.log(data.consultas)
            })
            .catch(error => console.error('Error al cargar contactos:', error));
    };


    return (


        <div className='table-containerProductos'>
            <div className='deFlexMore'>
                <h3>Ultimas {consultas?.length} consultas</h3>
                <Anchor to={`/dashboard/consultas`} className='logo'>
                    Ver más
                </Anchor>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id Consulta</th>
                        <th>Email</th>
                        <th>Edad</th>
                        <th>Conocimiento</th>
                        <th>Tiempo</th>
                        <th>Objetivo</th>
                        <th>Riesgo</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {consultas.map(item => (
                        <tr key={item.idConsulta}>
                            <td>{item.idConsulta}</td>
                            <td>{item.email}</td>
                            <td>{item.edad}</td>
                            <td>{item.conocimiento}</td>
                            <td>{item.tiempo}</td>
                            <td>{item.objetivo}</td>
                            <td>{item.riesgo}</td>
                            <td>{item.accion}</td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    );
};

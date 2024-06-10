import React, { useEffect, useState } from 'react';
import './ApiBrca.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import TitleSection from '../TitleSection/TitleSection';

export default function ApiBrca() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.bcra.gob.ar/estadisticas/v2.0/principalesvariables')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.results);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='ApiBrca'>
            <TitleSection section="Principales Variables del BCRA" />
            <div className='table-responsive'>
                <table className='tableApi'>
                    <thead>
                        <tr>
                            <th><FontAwesomeIcon icon={faChartLine} size="1x" className='ICONAPI2' /></th>
                            <th>Descripción</th>
                            <th>Valor</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td><FontAwesomeIcon icon={faChartLine} size="1x" className='ICONAPI' /></td>
                                <td id='descripcionApi'>{item.descripcion}</td>
                                <td id='valorApi'>{item.valor}</td>
                                <td id='fechaApi'>{item.fecha}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

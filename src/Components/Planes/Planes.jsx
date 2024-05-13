import React from 'react'
import './Planes.css'
import TitleSection from '../TitleSection/TitleSection';

export default function Planes() {
    return (
        <div className='Planes'>
            <div className='bg'>

            </div>
            <TitleSection section="Planes para personas físicas" />

            <div className='planesGrap'>
                <div className='planes-card'>
                    <h3>Dinero simple</h3>
                    <strong>-Hace rendir tu sueldo-</strong>
                    <ul>
                        <li>Invertí en pesos.</li>
                        <li>Rendimiento automático.</li>
                        <li>Obtené un plus de ahorro.</li>
                        <li>Lo que puedo cuando puedo.</li>
                    </ul>
                </div>
                <div className='planes-card'>
                    <h3>Ahorro simple</h3>
                    <strong>-Enfocado en un objetivo-</strong>
                    <ul>
                        <li>Para casos de contingencia.</li>
                        <li>Una jubilación segura.</li>
                        <li>Reformar tu casa.</li>
                    </ul>
                </div>
                <div className='planes-card'>
                    <h3>Inversión simple  </h3>
                    <strong>-Para objetivos claros-</strong>
                    <ul>
                        <li>Educación.</li>
                        <li>Comprar un auto.</li>
                        <li>Departamento.</li>
                    </ul>
                </div>
            </div>
            <TitleSection section="Planes para PyMEs" />
            <div className='planesGrap2'>

                <div className='cardPlanes'>
                    <h3>Protección de activos</h3>
                </div>

                <div className='cardPlanes'>
                    <h3>Cancelación de pasivos</h3>
                </div>
                <div className='cardPlanes'>
                    <h3>Te asesoramos en financiamiento bancario y no bancario </h3>
                </div>
            </div>

            <div className='planesGrap2'>
                <div className='Plancard'>
                    <p>Inversiones protegidas y garantizadas por la C.N.V.</p>
                </div>
                <div className='Plancard'>
                    <p>Nosotros no podemos disponer de tu dinero. Sólo vos!</p>
                </div>

                <div className='Plancard'>
                    <p>Podés monitorear tus inversiones las 24 hs. del día.

                    </p>
                </div>

                <div className='Plancard'>
                    <p>Te ayudamos a invertir en cualquier parte del mundo!

                    </p>
                </div>

                <div className='Plancard'>
                    <p>100% transparente y simple.

                    </p>
                </div>

            </div>
        </div>
    )
}

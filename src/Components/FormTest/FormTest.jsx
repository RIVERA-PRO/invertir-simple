import React, { useState } from 'react';
import './FormTest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
export default function FormTest() {
    const [currentSection, setCurrentSection] = useState('inicio');
    const [sectionHistory, setSectionHistory] = useState(['inicio']);
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [conocimiento, setConocimiento] = useState('');
    const [tiempo, setTiempo] = useState('');
    const [objetivo, setObjetivo] = useState('');
    const [riesgo, setRiesgo] = useState('');
    const [accion, setAccion] = useState('');

    const handleNextSection = (nextSection) => {
        setCurrentSection(nextSection);
        setSectionHistory([...sectionHistory, nextSection]);
    };

    const handlePreviousSection = () => {
        const newHistory = [...sectionHistory];
        newHistory.pop();
        const previousSection = newHistory[newHistory.length - 1];
        setCurrentSection(previousSection);
        setSectionHistory(newHistory);
    };

    const handleInputChange = (value, setState) => {
        setState(value);
    };

    const sections = {
        email: {
            seccion: 'email',
            numero: 1,
            titulo: 'Para iniciar el test ingrese su correo electrónico. Este campo es obligatorio*',
            subtitulo: '',
            placeholder: 'nombre@ejemplo.com',
            tipo: 'input',
            value: email,
            onChange: (e) => handleInputChange(e.target.value, setEmail),
            next: 'edad'
        },
        edad: {
            seccion: 'edad',
            numero: 2,
            titulo: '¿Cuál es tu rango de edad? Este campo es obligatorio**',
            subtitulo: '🔹 Responde con la verdad.',
            opciones: [
                { label: '18 a 35 años', value: 'A' },
                { label: '35 a 55 años', value: 'B' },
                { label: '+ de 55 años', value: 'C' }
            ],
            value: edad,
            onChange: (value) => handleInputChange(value, setEdad),
            next: 'conocimiento'
        },
        conocimiento: {
            seccion: 'conocimiento',
            numero: 3,
            titulo: '¿Cómo calificas tu conocimiento en inversiones? Este campo es obligatorio*',
            subtitulo: 'Elige la opción que más te represente',
            opciones: [
                { label: 'Principiante', value: 'A' },
                { label: 'Intermedio', value: 'B' },
                { label: 'Avanzado', value: 'C' },
                { label: 'Experto', value: 'D' }
            ],
            value: conocimiento,
            onChange: (value) => handleInputChange(value, setConocimiento),
            next: 'tiempo'
        },
        tiempo: {
            seccion: 'tiempo',
            numero: 4,
            titulo: '¿Cuánto tiempo conservarías la inversión? Este campo es obligatorio*',
            subtitulo: 'Elige sólo una de las opciones',
            opciones: [
                { label: 'Menos de 6 meses', value: 'A' },
                { label: 'De 6 a 12 meses', value: 'B' },
                { label: 'Entre 1 y 2 años', value: 'C' },
                { label: 'Más de 2 años', value: 'D' }
            ],
            value: tiempo,
            onChange: (value) => handleInputChange(value, setTiempo),
            next: 'objetivo'
        },
        objetivo: {
            seccion: 'objetivo',
            numero: 5,
            titulo: '¿Cuál es tu objetivo de inversión? Este campo es obligatorio*',
            subtitulo: 'Elige sólo una de las opciones',
            opciones: [
                { label: 'Preservar el dinero invertido', value: 'A' },
                { label: 'Superar la rentabilidad que ofrece un plazo fijo', value: 'B' },
                { label: 'Alto rendimiento', value: 'C' }
            ],
            value: objetivo,
            onChange: (value) => handleInputChange(value, setObjetivo),
            next: 'riesgo'
        },
        riesgo: {
            seccion: 'riesgo',
            numero: 6,
            titulo: '¿Cómo te sientes frente al riesgo? Este campo es obligatorio*',
            subtitulo: 'Elige sólo una de las opciones',
            opciones: [
                { label: 'No me importa, busco la mayor rentabilidad', value: 'A' },
                { label: 'Aceptaría riesgo a cambio de rentabilidad', value: 'B' },
                { label: 'No me gustaría perder mi capital invertido', value: 'C' }
            ],
            value: riesgo,
            onChange: (value) => handleInputChange(value, setRiesgo),
            next: 'accion'
        },
        accion: {
            seccion: 'accion',
            numero: 7,
            titulo: '¿Qué harías si tu inversión comienza a perder valor? Este campo es obligatorio*',
            subtitulo: 'Elige sólo una de las opciones',
            opciones: [
                { label: 'Vendería todo', value: 'A' },
                { label: 'Vendería solo una parte', value: 'B' },
                { label: 'Compraría más aprovechando bajas', value: 'C' }
            ],
            value: accion,
            onChange: (value) => handleInputChange(value, setAccion),
            next: 'fin'
        }
    };

    const handleReload = () => {
        window.location.reload();
    };

    const renderSection = (sectionKey) => {
        const section = sections[sectionKey];

        return (
            <section className='sectionTest2'>
                <label htmlFor={section.seccion}><span>{section.numero}</span> <FontAwesomeIcon icon={faArrowRight} className='iconRigth' /> {section.titulo}</label>
                <strong>{section.subtitulo}</strong>
                {section.tipo === 'input' ? (
                    <input type="text" className='email' id={section.seccion} placeholder={section.placeholder} value={section.value} onChange={section.onChange} />
                ) : (
                    section.opciones.map((opcion, index) => (
                        <div
                            key={index}
                            className={`inputRadio ${section.value === opcion.label ? 'selected' : ''}`}
                            onClick={() => {
                                section.onChange(opcion.label);
                                handleNextSection(section.next);
                            }}
                        >
                            <label><span>{opcion.value}</span> {opcion.label}</label>
                            <input
                                type="radio"
                                name={section.seccion}
                                value={opcion.label}
                                checked={section.value === opcion.label}
                                onChange={() => section.onChange(opcion.label)}
                                style={{ display: 'none' }}
                            />
                        </div>
                    ))
                )}
                <button className='BtnNext' onClick={() => handleNextSection(section.next)} disabled={!section.value}>Aceptar</button>
                <div className='btnsNextPrev'>
                    <button onClick={handlePreviousSection}> <FontAwesomeIcon icon={faArrowUp} /></button>
                    <button onClick={() => handleNextSection(section.next)} disabled={!section.value}> <FontAwesomeIcon icon={faArrowDown} /></button>
                </div>
            </section>
        );
    };

    return (
        <div className='FormTestContain'>
            {currentSection === 'inicio' && (
                <section className='sectionTest' id='inicio'>
                    <h2>Test del Inversor</h2>
                    <h3>✏️ Completa el test y conoce tu perfil de inversor.</h3>
                    <h3>🔹 Con esta herramienta estableceremos la cartera de inversión que mejor se ajusta a tus expectativas.</h3>
                    <h3>🔹 Son sólo 6 simples pasos</h3>
                    <button className='BtnNext' onClick={() => handleNextSection('email')}>Empezemos</button>
                    <span>Toma 45 seg</span>
                </section>
            )}

            {Object.keys(sections).map(sectionKey => (
                currentSection === sectionKey && renderSection(sectionKey)
            ))}

            {currentSection === 'fin' && (
                <section className='sectionTest' id='fin'>
                    <h2>Tu perfil de inversor es conservador/a</h2>
                    <h3>Un asesor de Invertir Simple se pondrá en contacto para ofrecerte un plan de inversión a tu medida</h3>
                    <h3>Muchas Gracias</h3>
                    <button className='BtnNext2' onClick={() => handleReload()}>
                        Realizar un nuevo perfil</button>
                    {/* <div>
                        <p>Email: {email}</p>
                        <p>Rango de Edad: {edad}</p>
                        <p>Conocimiento en inversiones: {conocimiento}</p>
                        <p>Tiempo de inversión: {tiempo}</p>
                        <p>Objetivo de inversión: {objetivo}</p>
                        <p>Riesgo tolerado: {riesgo}</p>
                        <p>Acción ante pérdida: {accion}</p>
                    </div> */}
                </section>
            )}
        </div>
    );
}

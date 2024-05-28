import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faArrowUp, faArrowDown, faSync } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import './ConsultasData.css'
import 'jspdf-autotable';
import baseURL from '../../url';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
export default function ConsultasData() {
    const [consultas, setConsultas] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [consulta, setConsulta] = useState({});
    const [selectedSection, setSelectedSection] = useState('texto');

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

    const eliminarConsulta = (idConsulta) => {
        // Reemplaza el window.confirm con SweetAlert2
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${baseURL}/consultaDelete.php?idConsulta=${idConsulta}`, {
                    method: 'DELETE',
                })
                    .then(response => response.json())
                    .then(data => {
                        Swal.fire(
                            '¡Eliminado!',
                            data.mensaje,
                            'success'
                        );
                        cargarConsulta();
                    })
                    .catch(error => {
                        console.error('Error al eliminar consulta:', error);
                        toast.error(error);
                    });
            }
        });
    };

    const abrirModal = (item) => {
        setConsulta(item);

        setModalVisible(true);
    };

    const cerrarModal = () => {
        setModalVisible(false);
    };



    const handleSectionChange = (section) => {
        setSelectedSection(section);
    };

    const enviarCorreo = () => {
        // Aquí implementa la lógica para enviar un mensaje al correo
        window.location.href = `mailto:${consulta?.email}`;
    };
    const [filtroId, setFiltroId] = useState('');
    const [filtroEmail, setFiltroEmail] = useState('');
    const [filtroEdad, setFiltroEdad] = useState('');
    const [filtroConocimiento, setFiltroConocimiento] = useState('');
    const [filtroObjetivo, setFiltroObjetivo] = useState('');
    const [filtroRiesgo, setFiltroRiesgo] = useState('');
    const [filtroAccion, setFiltrAccion] = useState('');
    const [ordenInvertido, setOrdenInvertido] = useState(false);
    const Filtrados = consultas.filter(item => {
        const idMatch = item?.idConsulta?.toString().includes(filtroId);
        const emailMatch = item?.email?.toLowerCase().includes(filtroEmail.toLowerCase());
        const edadMatch = item?.edad?.toLowerCase().includes(filtroEdad.toLowerCase());
        const conocimientoMatch = item?.conocimiento?.toLowerCase().includes(filtroConocimiento.toLowerCase());
        const objetivoMatch = item?.objetivo?.toLowerCase().includes(filtroObjetivo.toLowerCase());
        const riesgoMatch = item?.riesgo?.toLowerCase().includes(filtroRiesgo.toLowerCase());
        const accionMatch = item?.accion?.toLowerCase().includes(filtroAccion.toLowerCase());
        return idMatch && emailMatch && edadMatch && conocimientoMatch && riesgoMatch && objetivoMatch && accionMatch;
    });
    const recargar = () => {
        cargarConsulta();
    };
    const invertirOrden = () => {
        setConsultas([...consultas].reverse());
        setOrdenInvertido(!ordenInvertido);
    };
    const descargarExcel = () => {
        const data = Filtrados.map(item => ({

            'ID Consulta': item.idConsulta,
            Email: item.email,
            Edad: item.edad,
            Conocimiento: item.conocimiento,
            Tiempo: item.tiempo,
            Objetivo: item.objetivo,
            Riesgo: item.riesgo,
            Accion: item.accion,
            Fecha: item.createdAt,

        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Consultas');
        XLSX.writeFile(wb, 'consultas.xlsx');
    };

    const descargarPDF = () => {
        const pdf = new jsPDF();
        pdf.text('Lista de consultas', 10, 10);

        const columns = [
            { title: 'ID', dataKey: 'idUsuario' },
            { title: 'Email', dataKey: 'email' },
            { title: 'Edad', dataKey: 'edad' },
            { title: 'Conocimiento', dataKey: 'conocimiento' },
            { title: 'Tiempo', dataKey: 'tiempo' },
            { title: 'Objetivo', dataKey: 'objetivo' },
            { title: 'Riesgo', dataKey: 'riesgo' },
            { title: 'Accion', dataKey: 'accion' },
            { title: 'Fecha', dataKey: 'createdAt' },
        ];

        const data = Filtrados.map(item => ({
            'ID Consulta': item.idConsulta,
            Email: item.email,
            Edad: item.edad,
            Conocimiento: item.conocimiento,
            Tiempo: item.tiempo,
            Objetivo: item.objetivo,
            Riesgo: item.riesgo,
            Accion: item.accion,
            Fecha: item.createdAt,
        }));

        pdf.autoTable({
            head: [columns.map(col => col.title)],
            body: data.map(item => Object.values(item)),
            headStyles: {
                fillColor: [0, 0, 0],
                textColor: [255, 255, 255],
                cellWidth: 'wrap',
            },
        });

        pdf.save('consultas.pdf');
    };

    return (
        <div>

            <ToastContainer />
            <div className='deFlexContent'>
                <div className='deFlex2'>

                    <button className='excel' onClick={descargarExcel}><FontAwesomeIcon icon={faArrowDown} /> Excel</button>
                    <button className='pdf' onClick={descargarPDF}><FontAwesomeIcon icon={faArrowDown} /> PDF</button>

                </div>


                <div className='filtrosContain'>
                    <div className='inputsColumn'>

                        <input type="number" value={filtroId} onChange={(e) => setFiltroId(e.target.value)} placeholder='ID Consulta' />
                    </div>


                    <div className='inputsColumn'>

                        <input type="text" value={filtroEmail} onChange={(e) => setFiltroEmail(e.target.value)} placeholder='Email' />
                    </div>

                    <div className='inputsColumn'>

                        <input type="text" value={filtroEdad} onChange={(e) => setFiltroEdad(e.target.value)} placeholder='Edad' />
                    </div>
                    <div className='inputsColumn'>

                        <input type="text" value={filtroConocimiento} onChange={(e) => setFiltroConocimiento(e.target.value)} placeholder='Conocimiento' />
                    </div>
                    <div className='inputsColumn'>

                        <input type="text" value={filtroObjetivo} onChange={(e) => setFiltroObjetivo(e.target.value)} placeholder='Objetivo' />
                    </div>

                    <div className='inputsColumn'>

                        <input type="text" value={filtroRiesgo} onChange={(e) => setFiltroRiesgo(e.target.value)} placeholder='Riesgo' />
                    </div>
                    <div className='inputsColumn'>

                        <input type="text" value={filtroAccion} onChange={(e) => setFiltrAccion(e.target.value)} placeholder='Accion' />
                    </div>


                    {/* <button className='reload' onClick={recargar}><FontAwesomeIcon icon={faSync} /></button> */}
                    <button className='reverse' onClick={invertirOrden}>
                        {ordenInvertido ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}
                    </button>


                </div>
            </div>
            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='deFlexBtnsModal'>

                            <div className='deFlexBtnsModal'>
                                <button
                                    className={selectedSection === 'texto' ? 'selected' : ''}
                                    onClick={() => handleSectionChange('texto')}
                                >
                                    Detalles
                                </button>

                            </div>
                            <span className="close" onClick={cerrarModal}>
                                &times;
                            </span>
                        </div>
                        <div className='sectiontext' style={{ display: selectedSection === 'texto' ? 'flex' : 'none' }}>
                            <div className='flexGrap'>
                                <fieldset>
                                    <legend>Email</legend>
                                    <input
                                        type="text"
                                        value={consulta.email}

                                    />
                                </fieldset>
                                <fieldset>
                                    <legend>Edad</legend>
                                    <input
                                        type="text"
                                        value={consulta.edad}

                                    />
                                </fieldset>

                                <fieldset >
                                    <legend>Conocimiento</legend>
                                    <input
                                        type="text"
                                        value={consulta.conocimiento}

                                    />
                                </fieldset>
                                <fieldset >
                                    <legend>Tiempo</legend>
                                    <input
                                        type="text"
                                        value={consulta.tiempo}

                                    />
                                </fieldset>
                                <fieldset >
                                    <legend>Objetivo</legend>
                                    <input
                                        type="text"
                                        value={consulta.objetivo}

                                    />
                                </fieldset>
                                <fieldset >
                                    <legend>Riesgo</legend>
                                    <input
                                        type="text"
                                        value={consulta.riesgo}

                                    />
                                </fieldset>
                                <fieldset >
                                    <legend>Accion</legend>
                                    <input
                                        type="text"
                                        value={consulta.accion}

                                    />
                                </fieldset>
                                <fieldset >
                                    <legend>Fecha</legend>
                                    <input
                                        type="email"
                                        value={new Date(consulta?.createdAt).toLocaleDateString()}

                                    />
                                </fieldset>

                            </div>
                            <div className='deFlexBtnSend'>
                                <button onClick={enviarCorreo}>Enviar Correo</button>
                            </div>
                        </div>




                    </div>
                </div>
            )}
            <div className='table-container'>
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
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Filtrados.map(item => (
                            <tr key={item.idConsulta}>
                                <td>{item.idConsulta}</td>
                                <td>{item.email}</td>
                                <td>{item.edad}</td>
                                <td>{item.conocimiento}</td>
                                <td>{item.tiempo}</td>
                                <td>{item.objetivo}</td>
                                <td>{item.riesgo}</td>
                                <td>{item.accion}</td>
                                <td>{new Date(item?.createdAt).toLocaleDateString()}</td>
                                <td>

                                    <button className='eliminar' onClick={() => eliminarConsulta(item.idConsulta)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button className='editar' onClick={() => abrirModal(item)}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate, } from 'react-router';
import baseURL from '../../url';
export default function LoginCliente() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [mensaje2, setMensaje2] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        setMensaje2('Procesando...')
        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('contrasena', password);
            formData.append('iniciar_sesion', true);

            const response = await fetch(`${baseURL}/login.php`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                if (data.mensaje) {
                    console.log(data.mensaje);
                    toast.success(data.mensaje);
                    setMensaje2('')
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 2000);

                } else if (data.error) {
                    setErrorMessage(data.error);
                    console.log(data.error);
                    setMensaje2('')
                    toast.error(data.error);
                }
            } else {
                throw new Error('Error en la solicitud al servidor');

            }
        } catch (error) {
            console.error('Error:', error.message);
            toast.error(error.message);
            setMensaje2('')
        }
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleLogin} id='crearForm'>

                <div className='flexGrap'>

                    <fieldset>

                        <legend>Email:</legend>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                        />
                    </fieldset>


                    <fieldset >
                        <legend>Contraseña:</legend>
                        <div className='deFlexPass'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Contraseña"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </fieldset>
                </div>



                {mensaje2 ? (
                    <button type="button" className='btnLoading' disabled>
                        {mensaje2}
                    </button>
                ) : (
                    <button type="submit" className='btn'>
                        Iniciar Sesión
                    </button>
                )}
            </form>
        </div>



    );
}

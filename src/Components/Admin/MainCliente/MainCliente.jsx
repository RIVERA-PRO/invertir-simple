import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import videos from '../../videos';
import Modal from 'react-modal';
import './MainCliente.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faVideo } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Modal.setAppElement('#root');

export default function MainCliente() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const openModal = (video) => {
        setCurrentVideo(video);
        setModalIsOpen(true);
        navigate(`?id=${video.id}`);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentVideo(null);
        navigate(location.pathname);
    };

    const handleVideoEnded = () => {
        if (currentVideo) {
            navigate(`?id=${currentVideo.id}&status=completado`);
            toast.success('Video completado', { autoClose: 1000 });

        }
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const videoId = params.get('id');
        if (videoId) {
            const video = videos.find(v => v.id === parseInt(videoId));
            if (video) {
                setCurrentVideo(video);
                setModalIsOpen(true);
            }
        }
    }, [location.search]);

    return (
        <div>
            <ToastContainer />
            <div className='videosGrap'>
                {videos.map(item => (
                    <div key={item.id} onClick={() => openModal(item)} className='cardVideo'>

                        <div className="video-preview">
                            <video muted>
                                <source src={item.video} type="video/mp4" />
                                Tu navegador no soporta la etiqueta de video.
                            </video>
                        </div>
                        <div className='cardVideoText'>
                            <div className='deFlexVideoText'>
                                <FontAwesomeIcon icon={faVideo} />
                                <h3>{item.titulo}</h3>
                            </div>

                            <p>{item.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="modalVideo"
                overlayClassName="overlayVideo"
            >
                <div className="modalVideoContent">
                    <div className='deFlexModal'>
                        <span onClick={closeModal} className="closeModal"> <FontAwesomeIcon icon={faArrowLeft} /></span>
                        <h3>Video</h3>
                    </div>

                    {currentVideo && (
                        <video controls onEnded={handleVideoEnded}>
                            <source src={currentVideo.video} type="video/mp4" />
                            Tu navegador no soporta la etiqueta de video.
                        </video>
                    )}


                    <div className='cardVideoText'>
                        <div className='deFlexVideoText'>
                            <FontAwesomeIcon icon={faVideo} />
                            <h3>{currentVideo?.titulo}</h3>
                        </div>
                        <p>{currentVideo?.descripcion}</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './BannersModal.css';
import baseURL from '../url';

export default function BannersModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isModalClosed = sessionStorage.getItem('modalClosed');
        if (!isModalClosed) {
            cargarBanners();
        }
    }, []);

    const handleCloseModal = () => {
        sessionStorage.setItem('modalClosed', 'true');
        setModalIsOpen(false);
    };

    const cargarBanners = () => {
        fetch(`${baseURL}/bannersGet.php`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                const bannerImages = data?.banner?.reverse().slice(0, 1).map(banner => banner?.imagen);
                setImages(bannerImages);
                setLoading(false);
                if (bannerImages.length > 0) {
                    setModalIsOpen(true);
                }
            })
            .catch(error => {
                console.error('Error al cargar productos:', error);
                setLoading(false);
            });
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            className="modal-dev"
            overlayClassName="overlay-dev"
            ariaHideApp={false}
        >
            <div className='modal-dev-contain'>
                {images?.map((image, index) => (
                    <img src={image} alt={`imagen-${index}`} className='banner-dev-modal' key={index} />
                ))}
                {/* <button onClick={handleCloseModal}>OK</button> */}
            </div>
        </Modal>
    );
}

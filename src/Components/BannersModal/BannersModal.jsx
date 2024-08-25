import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import './BannersModal.css';
import baseURL from '../url';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function BannersModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);

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
                console.log('Data recibida:', data); // Para verificar la estructura de data
                const bannerImages = data?.banner?.reverse()?.map(banner => banner?.imagen) || [];
                setImages(bannerImages);
                setLoading(false);
                if (bannerImages.length > 0) {
                    setModalIsOpen(true);
                }
            })
            .catch(error => {
                console.error('Error al cargar banners:', error);
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
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => {
                        console.log(swiper);
                        swiperRef.current = swiper;
                    }}
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt={`imagen`} className='banner-dev-modal' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Modal>
    );
}

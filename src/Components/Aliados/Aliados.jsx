import { React, useRef } from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Aliados.css';
import aliado from '../../images/aliado1.jpg'
import aliado2 from '../../images/aliado2.jpg'
import aliado3 from '../../images/aliado3.jpg'
import aliado4 from '../../images/aliado4.jpg'
SwiperCore.use([Navigation, Pagination, Autoplay]);
export default function Aliados() {
    const swiperRef = useRef(null);
    const images = [


        {
            img: aliado,

        },
        {
            img: aliado2,

        },
        {
            img: aliado3,

        },
        {
            img: aliado4,

        },


    ]
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            autoplay={{ delay: 3000 }} // Cambia el valor de 'delay' según tus preferencias

            onSwiper={(swiper) => {
                console.log(swiper);
                swiperRef.current = swiper;
            }}
            pagination={{ clickable: true }}

            id='swiper_container_aliados'
        >
            {images.map((item) => (
                <SwiperSlide id='SwiperSlide-scroll-aliados'>
                    <img src={item.img} alt={`imagen-`} />

                </SwiperSlide>
            ))}
        </Swiper>
    )
}

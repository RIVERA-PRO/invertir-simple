import React, { useEffect, useState, useRef } from 'react';
import './Banners.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import BtnContact from '../BtnContact/BtnContact';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Banners() {

    const swiperRef = useRef(null);
    const images = [

        {
            img: banner2,
            titulo: 'Asesoramiento integral y personalizado',
            subtitulo: 'Dedicada a brindar servicios financieros.',
            parrafo: 'Te acercamos al mundo de las finanzas de manera SIMPLE.',

        },
        {
            img: banner1,
            titulo: 'Asesoramiento integral y personalizado',
            subtitulo: 'Dedicada a brindar servicios financieros.',
            parrafo: 'Te acercamos al mundo de las finanzas de manera SIMPLE.',

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
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
                console.log(swiper);
                swiperRef.current = swiper;
            }}
            id='swiper_container'
        >
            {images.map((item) => (
                <SwiperSlide id='SwiperSlide-scroll'>
                    <img src={item.img} alt={`imagen-`} />
                    <div className='bannerText'>
                        <h1>{item.titulo}</h1>
                        <h3>{item.subtitulo}</h3>
                        <p>{item.parrafo}</p>
                        <BtnContact />

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    );
}

import React, { useEffect, useState, useRef } from 'react';
import './Banners.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import BtnContact from '../BtnContact/BtnContact';
import phone from '../../images/phone.png'
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Banners() {

    const swiperRef = useRef(null);
    const images = [

        {
            img: banner2,
            titulo: 'Revoluciona tu forma de ahorrar dinero e invertir online',
            subtitulo: 'Aprende a invertir dinero en bolsa fácil y seguro',
            parrafo: 'Te acercamos al mundo de las finanzas de manera SIMPLE.',
        },

        {
            img: banner1,
            titulo: 'Abrí una cuenta y empezá a potenciar tus ahorros',
            subtitulo: 'Comenzá a operar con el asesoramiento de Invertir Simple en 3 simples pasos',
            parrafo: `1. Abrí una cuenta 2. Accedé a nuestros contenidos  3. Operá online `,

        },


    ]
    return (


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
            id='swiper_container'
        >
            {images.map((item) => (
                <SwiperSlide id='SwiperSlide-scroll'>
                    <img src={item.img} alt={`imagen-`} />
                    <div className='bannerText'>
                        <div className='bannerText2'>
                            <h1>{item.titulo}</h1>
                            <hr />
                            <h3>{item.subtitulo}</h3>
                            <p>{item.parrafo}</p>
                            <BtnContact />
                        </div>
                        <img src={phone} alt="" />
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>

    );
}

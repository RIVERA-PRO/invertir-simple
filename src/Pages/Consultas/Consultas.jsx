import React from 'react'
import Header from '../Header/Header'
import ConsultasData from '../../Components/Admin/ConsultasData/ConsultasData'
import HeaderDash from '../../Components/Admin/HeaderDash/HeaderDash'
export default function Consultas() {
    return (
        <div className='containerGrid'>
            <Header />

            <section className='containerSection'>

                <HeaderDash />
                <div className='container'>
                    <ConsultasData />
                </div>
            </section>
        </div>
    )
}


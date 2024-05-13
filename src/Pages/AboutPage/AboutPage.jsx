import React from 'react'
import './AboutPage.css'
import img from '../../images/about-1.jpg'
import img2 from '../../images/about-2.jpg'
import card from '../../images/card.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import Galery from '../../Components/Galery/Galery'
export default function AboutPage() {
    return (
        <div className='AboutContain'>
            <h1>Jaroti se fundó en 1990. Somos artesanos que diseñamos, fabricamos y vendemos joyas y regalos para el amor.</h1>

            <div className='deFlexAbout'>
                <img src={img} alt="" />
                <div className='aboutText'>
                    <h2>ACERCA DE NUESTRA TIENDA</h2>
                    <p>Desde 1990 dolor sit amet, consectetur adipiscing elit. Quisque
                        pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nuncullamcorper et.
                        Fusce finibus non odio vel viverra. Aliquam condimentum dictum gravida.
                    </p>
                </div>

            </div>

            <div className='deFlexAbout'>
                <div className='aboutText'>
                    <h2>ACERCA DE NUESTRA TIENDA</h2>
                    <div className='cardsAbout'>
                        <div className='aboutCard'>
                            <img src={card} alt="" />
                            <div className='aboutCardText'>
                                <h3>Diseño de producción</h3>
                                <p>Entero dignissim sagittis quam. Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.</p>
                            </div>
                        </div>
                        <div className='aboutCard'>
                            <img src={card2} alt="" />
                            <div className='aboutCardText'>
                                <h3>Fabricación</h3>
                                <p>Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.</p>
                            </div>
                        </div>
                        <div className='aboutCard'>
                            <img src={card3} alt="" />
                            <div className='aboutCardText'>
                                <h3>Comercialización y venta</h3>
                                <p>Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={img2} alt="" />
            </div>
            <Galery />
        </div>
    )
}

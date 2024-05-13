import React from 'react'
import './TitleSection.css'
export default function TitleSection({ section, text }) {
    return (
        <div className='titleSection'>

            <h2> {section}</h2>
            <p>{text}</p>

        </div>
    )
}

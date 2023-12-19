import React from 'react'

function PopCard({ src, title, caption }) {
    return (
        <div className='pop_card'>
            <img src={src} />
            <div className='caption'>
                <h1>{title}</h1>
                <p>{caption}</p>
            </div>

        </div>
    )
}

export default PopCard

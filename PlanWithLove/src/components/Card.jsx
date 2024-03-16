import React, { useState } from 'react'


function Card({ id, image, info, price, name , removeTour }) {
    const [readMore, setReadMore] = useState(false)
    const description = readMore ? info : `${info.substring(0, 200)}...`

    function readMoreHandler() {
        setReadMore(!readMore)
    }


    return (
        <div className="Card">
            <img src={image} className='image'/>
            <div className='tour-detail'>
                <h4 className='tour-price'>{price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>
            <div className='description'>
                {description}
                <span className='read-more' onClick={readMoreHandler}>
                    {readMore ? ` show less` : `  read more`}
                </span>
            </div>
            <button className='btn-ni' onClick={() => removeTour(id)}>   Not Interested</button>
        </div>
    )
}

export default Card
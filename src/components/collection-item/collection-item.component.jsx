import React from 'react'
import './collection-item.styles.scss'

export default function CollectionItem({name, id, price, imageUrl}) {
    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="collection-foote">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <button className='addCart'>Add To Cart</button>
        </div>
    )
}

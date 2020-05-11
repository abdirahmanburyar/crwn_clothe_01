import React from 'react'
import './cart-item.styles.scss'
export default ({ name, quantity, price, imageUrl }) => {
    console.log(name)
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span>{name}</span>
                <span>{`${quantity}x${price}`}</span>
                <span style={{ fontSize: '20px'}}>Total: ${quantity*price}</span>
            </div>
        </div>
    )
}
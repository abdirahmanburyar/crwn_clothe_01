import React from 'react'
import './checkout-item.styles.scss'
import { withRouter } from 'react-router-dom'

 const CheckoutItems = ({ cartItem: { price, imageUrl, name, quantity }}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <button className="decrease">-</button>
                <span>{quantity}</span>
                <button className="increase">+</button>
            </div>
            <span className="price">${price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
}
export default withRouter(CheckoutItems)
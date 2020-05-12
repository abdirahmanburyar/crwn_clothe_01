import React from 'react'
import './checkout-item.styles.scss'
import { removeItem, addCart, decreaseCart } from '../../redux/cart/cart.action'
import { connect } from 'react-redux'
 const CheckoutItems = ({ cartItem, removeItem, addCart, decreaseCart }) => {
     const { price, imageUrl, name, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseCart(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}
const dispatchStateToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addCart: item => dispatch(addCart(item)),
    decreaseCart: item => dispatch(decreaseCart(item)),
})

export default connect(null, dispatchStateToProps)(CheckoutItems)
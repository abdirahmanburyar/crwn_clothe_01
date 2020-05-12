import React from 'react'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItem } from '../../redux/cart/cart.reselector'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { cartShowAndHide } from '../../redux/cart/cart.action'
const CartDropdow = ({ cart, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cart.length ?
                    cart.map(({id, ...otherItem }) => {
                        return (<CartItem key={id} {...otherItem} />)
                    })
                    :
                    (
                        <span className="empty-message">Your Cart is Empty</span>
                    )
                }
            </div>
                <button onClick={() => {
                    history.push('/checkout')
                    dispatch(cartShowAndHide())
                }} className="checkoutBtn">Go to Checkout</button>
            </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cart: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdow))
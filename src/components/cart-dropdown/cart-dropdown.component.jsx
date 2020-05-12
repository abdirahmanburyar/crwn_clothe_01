import React from 'react'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItem } from '../../redux/cart/cart.reselector'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
const CartDropdow = ({ cart, history }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cart.length ?
                    cart.map(({id, ...otherItem }) => {
                        console.log(otherItem)
                        return (<CartItem key={id} {...otherItem} />)
                    })
                    :
                    (
                        <span className="empty-message">Your Cart is Empty</span>
                    )
                }
            </div>
                <button onClick={() => history.push('/checkout')} className="checkoutBtn">Go to Checkout</button>
            </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cart: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdow))
import React from 'react'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItem } from '../../redux/cart/cart.reselector'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const CartDropdow = ({ cart }) => {
    console.log(cart)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cart.map(({id, ...otherItem }) => {
                        console.log(otherItem)
                        return (<CartItem key={id} {...otherItem} />)
                    })
                }
            </div>
                <Link to="/checkout" className="checkoutBtn">Go to Checkout</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: selectCartItem(state)
    }
}

export default connect(mapStateToProps)(CartDropdow)
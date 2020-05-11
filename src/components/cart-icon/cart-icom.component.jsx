import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as  ShoppingIcon } from './shopping-bag.svg'
import { connect } from 'react-redux'
import { cartShowAndHide } from '../../redux/cart/cart.action'


const CartIcon = ({ cartShowAndHide, cart }) => {
    return (
        <div className="cart-icon" onClick={() => cartShowAndHide()}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cart.length}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        cartShowAndHide: () => dispatch(cartShowAndHide())
    }
}

const mapStateToProps = (state) => {
    console.log(state.cart.cart);
    return {
    cart: state.cart.cart
}
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
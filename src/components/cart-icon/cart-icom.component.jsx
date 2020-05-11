import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as  ShoppingIcon } from './shopping-bag.svg'
import { connect } from 'react-redux'
import { cartShowAndHide } from '../../redux/cart/cart.action'


const CartIcon = ({ cartShowAndHide }) => {
    return (
        <div className="cart-icon" onClick={() => cartShowAndHide()}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        cartShowAndHide: () => dispatch(cartShowAndHide())
    }
}


export default connect(null, mapDispatchToProps)(CartIcon)
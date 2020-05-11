import React from 'react'
import CustomBtn from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import CartIcon from '../cart-icon/cart-icom.component'
export default function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            <div className="item">
                    <CartIcon />
                    <span>Home</span>
                </div>
                <div className="item">
                    <CartIcon />
                    <span>Home</span>
                </div>
                <div className="item">
                    <CartIcon />
                    <span>Home</span>
                </div>
                <div className="item">
                    <CartIcon />
                    <span>Home</span>
                </div>
                <div className="item">
                    <CartIcon />
                    <span>Home</span>
                </div>
                <div className="item">
                    <CartIcon />
                    <span>Home</span>
                </div>
                <div className="item">
                    <CartIcon />
                    <span>Home</span>
                </div>
            </div>
            <CustomBtn className="checkout" value="Go to Checkout" />
        </div>
    )
}

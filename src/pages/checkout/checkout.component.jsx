import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItem, selectCartItemTotal } from '../../redux/cart/cart.reselector'
import './checkout.styles.scss'
import CheckoutItems from '../checkout-items/checkout-items.component'
import StripeCheckout from '../../components/stripe-button/stripe-button.component'
const ChechOut = ({ carts, totalItemPrice }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                carts.map(item => <CheckoutItems key={item.id} cartItem={item}/>)
            }
            <div className="total">
            <span>Total: ${totalItemPrice}</span>
            </div>
            <StripeCheckout price={totalItemPrice} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    carts: selectCartItem,
    totalItemPrice: selectCartItemTotal 
})
export default connect(mapStateToProps)(ChechOut)
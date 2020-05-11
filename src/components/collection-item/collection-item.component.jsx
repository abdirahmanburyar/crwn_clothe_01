import React from 'react'
import './collection-item.styles.scss'
import { connect } from 'react-redux'
import { addCart } from '../../redux/cart/cart.action'
const CartItems = ({ item, addCart }) => {
    return (
            <div className="collection-item">
                <div className="image" style={{
                    backgroundImage: `url(${item.imageUrl})`
                }} />
                <div className="collection-footer">
                    <span className="name">{item.name}</span>
                    <span className="price">${item.price}</span>
                </div>
                <button className='addCart' onClick={() => addCart(item)}>Add To Cart <i className="fas fa-shopping-cart"></i></button>
            </div>
        )
}

const dispatchStateToProps = dispatch => ({
    addCart: item => dispatch(addCart(item))
})

export default connect(null, dispatchStateToProps)(CartItems)
import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './crown.svg'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icom.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { auth } from '../../firebase/firebase.utils'
import { cartHidden } from '../../redux/cart/cart.reselector'
import { setCurrentUser } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
const Header = ({ currentUser, cartToggle }) => {
    return (
        <div className="header">
           <Link to="/">
                <Logo className="logo" />
           </Link>
           <div className="options">
                <Link className="option" to="/shop">
                    <span>SHOP</span>
                </Link>
                <Link className="option" to="/contact">
                    <span>CONTACT</span>
                </Link>
                {
                    currentUser ? 
                    (
                        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    )
                    :
                    (
                        <Link to="/auth">Sign In</Link>
                    )
                }
                <CartIcon />
           </div>
            {
                cartToggle ? (<CartDropdown />) : ''
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: setCurrentUser,
    cartToggle: cartHidden
})

export default connect(mapStateToProps)(Header)

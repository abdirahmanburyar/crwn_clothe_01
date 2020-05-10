import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
const Header = ({ currentUser}) => {
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
                    (<div className="option" onClick={() => auth.signOut()}>Sign Out</div>)
                    :
                    (
                        <Link to="/auth">Sign In</Link>
                    )
                }
           </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header)
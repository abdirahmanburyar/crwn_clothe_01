import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './crown.svg'
import './header.styles.scss'

export default function Header() {
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
           </div>
            
        </div>
    )
}

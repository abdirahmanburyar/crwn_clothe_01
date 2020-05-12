import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './auth.styles.scss'
import { createStructuredSelector } from 'reselect'
import { setCurrentUser } from '../../redux/user/user.selector'
const Authentication = ({ currentUser }) => currentUser ? (<Redirect to="/" />) : (
        <div className="auth-page">
            <button onClick={() => signInWithGoogle() }>Sign In with <i className="fab fa-google"></i></button>
            <button>Sign In with <i className="fab fa-github"></i></button>
            <button>Sign In with <i className="fab fa-facebook-f"></i></button>
            <button>Sign In with <i className="fab fa-twitter"></i></button>
        </div>
    )


const mapStateToProps = createStructuredSelector({
    currentUser: setCurrentUser
})

export default connect(mapStateToProps)(Authentication)
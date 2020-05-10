import React from 'react'
import SignIn from './signin/signin.component'
import SignUp from './signup/signup.component'
import './auth.styles.scss'
export default function Auth() {
    return (
        <div className="auth-page">
            <SignIn />
            <SignUp />
        </div>
    )
}

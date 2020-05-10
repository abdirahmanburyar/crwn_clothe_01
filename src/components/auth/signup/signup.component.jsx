import React, { Component } from 'react'
import './signup.styles.scss'
import Input from '../../input/input.component'
import Button from '../../custom-button/custom-button.component'
import { auth, createUserProfileDoc } from '../../../firebase/firebase.utils'

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            displayName: '',
            confirmPassword: '',
            error: null
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async event => {
        event.preventDefault()
        console.log(this.state)
        const { displayName, email, password, confirmPassword } = this.state
        if(password !== confirmPassword){
            alert('passwords dont match')
            return
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDoc(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                error: null
            })
        }catch(err){
            this.setState({
                error: err
            })
        }
    }
    render() {
        const { error } = this.state
        return (
           <div className="sign-up">
               <h2>Create New Account</h2>
               {
                   error ? (
                    <div class="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                   ) : ''
               }
                <form onSubmit={this.handleSubmit}>
                <Input 
                    handleChange={this.handleChange}
                    name='displayName'
                    type='text'
                    value={this.state.displayName}
                    label='Full Name'
                    required
                />
                <Input 
                    handleChange={this.handleChange}
                    name='email'
                    type='email'
                    value={this.state.email}
                    label='Email'
                    required
                />
                <Input 
                    handleChange={this.handleChange}
                    name='password'
                    type='password'
                    label='Password'
                    value={this.state.password}
                    required
                />
                 <Input 
                    handleChange={this.handleChange}
                    name="confirmPassword"
                    type="password"
                    label="Repeat-Password"
                    value={this.state.confirmPassword}
                    required
                />
            <Button type="submit" value="Sign Up" />
            </form>
           </div>
        )
    }
}
export default SignUp
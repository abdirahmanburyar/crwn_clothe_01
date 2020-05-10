import React, { Component } from 'react'
import './signin.styles.scss'
import Input from '../../input/input.component'
import CustomButton from '../../custom-button/custom-button.component'
import { auth, sigInWithGoogle, createUserProfileDoc } from '../../../firebase/firebase.utils'
class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = this.state
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password)
            await createUserProfileDoc(user)
            this.setState({
                email: '',
                password: ''
            })
        }catch(err){
            console.log('Error: ', err)
        }
        this.setState({
            email: '',
            password: ''
        })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>Already have An Account!</h2>
                <form onSubmit={this.handleSubmit}>
                <Input 
                    handleChange={this.handleChange}
                    name='email'
                    type='email'
                    label='email'
                    value={this.state.email}
                    required
                />
                <Input 
                    handleChange={this.handleChange}
                    name='password'
                    type='password'
                    label='password'
                    value={this.state.password}
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit" value="Sign In" />
                    {' '}
                    <CustomButton onClick={ sigInWithGoogle } googlelebal="true" value="Sign In with Google" />
                </div>
                </form>
            </div>
        )
    }
}
export default SignIn
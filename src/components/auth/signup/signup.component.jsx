import React, { Component } from 'react'
import './signup.styles.scss'
import Input from '../../input/input.component'
import Button from '../../custom-button/custom-button.component'

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            email: '',
            password: '',
            name: ''
        })
    }
    render() {
        return (
           <div className="sign-up">
               <h2>Create New Account</h2>
                <form onSubmit={this.handleSubmit}>
                <Input 
                    handleChange={this.handleChange}
                    name='name'
                    type='text'
                    value={this.state.name}
                    label='name'
                    required
                />
                <Input 
                    handleChange={this.handleChange}
                    name='email'
                    type='email'
                    value={this.state.email}
                    label='email'
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
            <Button type="submit" value="Sign Up" />
            </form>
           </div>
        )
    }
}
export default SignUp
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './components/shop/shop.component'
import Header from './components/header/header.component'
import Auth from './components/auth/auth.component'
import { auth } from './firebase/firebase.utils'
class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  async componentDidMount(){
    this.unsubscribeFromAuth =  await auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user.email)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/auth' component={Auth} />
      </Switch>
      </div>
    );
  }
}

export default App;

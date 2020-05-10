import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './components/shop/shop.component'
import Header from './components/header/header.component'
import Auth from './components/auth/auth.component'
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth)
        await userRef.onSnapshot(snapshot => {
          console.log(snapshot)
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
              }
            })
        })
      }else {
        this.setState({
          currentUser: userAuth
        })
      }
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

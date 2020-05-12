import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './components/shop/shop.component'
import Header from './components/header/header.component'
import Authentication from './components/auth/auth.component'
import CheckOutItems from './pages/checkout/checkout.component'
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { setCurrentUser } from './redux/user/user.action'
class App extends Component {

  unsubscribeFromAuth = null
  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth)
        await userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        })
      }else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutItems} />
        <Route exact path='/auth' component={Authentication} />
      </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: setCurrentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

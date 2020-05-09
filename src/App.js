import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
const Hats = () => {
  return (
    <div>Hats page</div>
  )
}
function App() {
  return (
    <div>
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/shop/hats/:id' component={Hats} />
     </Switch>
    </div>
  );
}

export default App;

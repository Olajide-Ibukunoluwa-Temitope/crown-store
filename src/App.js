import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'


const Hats = () => {
  return (
    <div>
      <h2>xxxx</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;

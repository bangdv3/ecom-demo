import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

const HatPage = () => {
  return (
    <div>
      <h1> Hats page</h1>
    </div>
  );
}

function  App () {
  return (
    <div className="App">
      <Header/>
      <Switch> 
        <Route path= '/shop' component={ShopPage}/>
        <Route path= '/' component={HomePage}/>
      </Switch> 
    </div>
  );
}

export default App;

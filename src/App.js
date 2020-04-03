import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';

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
      <Switch> 
        <Route path= '/hats' component={HatPage}/>
        <Route path= '/' component={HomePage}/>
      </Switch> 
    </div>
  );
}

export default App;

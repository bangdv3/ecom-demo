import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignPage from './pages/signpage/signpage';

import {auth, fireCreateUser} from './firebase/firebase';

const HatPage = () => {
  return (
    <div>
      <h1> Hats page</h1>
    </div>
  );
}

class  App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubcribeFromAuth = null

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) { 
        const userRef = await fireCreateUser(userAuth)
        
        userRef.onSnapshot(snapshot => {
          //console.log(snapshot.data())
          this.setState({
            currentUser: {
              id: snapshot.id, 
              ...snapshot.data()
            }
          }, () => console.log(this.state) )
          
        })   
      } else {
        this.setState({currentUser : userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className="App"> 
        <Header currentUser = {this.state.currentUser}/>
        <Switch> 
          <Route path= '/signin' component={SignPage}/>
          <Route path= '/shop' component={ShopPage}/>
          <Route path= '/' component={HomePage}/>
          
        </Switch> 
      </div>
    );
  }
  
}

export default App;

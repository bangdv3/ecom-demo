import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignPage from './pages/signpage/signpage';

import {auth, fireCreateUser} from './firebase/firebase';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

const HatPage = () => {
  return (
    <div>
      <h1> Hats page</h1>
    </div>
  );
}

class  App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser : null
  //   }
  // }

  unsubcribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) { 
        const userRef = await fireCreateUser(userAuth)
        
        userRef.onSnapshot(snapshot => {
          //console.log(snapshot.data())
          setCurrentUser({
              id: snapshot.id, 
              ...snapshot.data()
          });
          
        })   
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className="App"> 
        <Header/>
        <Switch> 
          <Route path= '/signin' component={SignPage}/>
          <Route path= '/shop' component={ShopPage}/>
          <Route path= '/' component={HomePage}/>
          
        </Switch> 
      </div>
    );
  }
  
}

//to get updated by state
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps) (App);

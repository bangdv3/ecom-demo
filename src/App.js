import React, { Component } from 'react';
import './App.css';

import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignPage from './pages/signpage/signpage';
import CheckOut from './pages/checkout/checkout';

import {auth, fireCreateUser} from './firebase/firebase';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

class  App extends Component { 

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
          <Route path= '/signin' 
            render={ () => this.props.currentUser ? (<Redirect to='/'/>): (<SignPage />) }/>
          <Route path= '/shop' component={ShopPage}/>
          <Route path= '/checkout' component={CheckOut}/>
          
          <Route path= '/' component={HomePage}/>
          
        </Switch> 
      </div>
    );
  }
  
}

//to get updated by state
const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);

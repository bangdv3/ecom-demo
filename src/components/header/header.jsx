import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assests/crown.svg'
import './header.scss'

import {auth} from '../../firebase/firebase';
import {connect} from 'react-redux';


const Header = ({currentUser})=> {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'> 
        <Logo className='logo'/>
      </Link>
      <div className='pages'>
        <Link className='page' to='/shop'>SHOP</Link>  
        <Link className='page' to='/contact'>CONTACT</Link>  
        {
          currentUser?
          <div className='page' onClick={()=> auth.signOut()}>Sign Out</div>
          : <Link className='page' to='/signin'>Sign In</Link> 
        }
      </div>
      
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);
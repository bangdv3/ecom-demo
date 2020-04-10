import React from 'react';
import { ReactComponent as Logo} from '../../assests/crown.svg'
import './header.scss'

import {auth} from '../../firebase/firebase';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import {HeaderTag, LogoTag, PageGroupTag, PageLinkTag} from './header-tag'


const Header = ({currentUser, cartHidden})=> {
  return (
    <HeaderTag>
      <LogoTag to='/'> 
        <Logo className='logo'/>
      </LogoTag>
      <PageGroupTag>
        <PageLinkTag to='/shop'>SHOP</PageLinkTag>  
        <PageLinkTag to='/contact'>CONTACT</PageLinkTag>  
        {
          currentUser?
          <PageLinkTag as='div' onClick={()=> auth.signOut()}>Sign Out</PageLinkTag>
          : <PageLinkTag to='/signin'>Sign In</PageLinkTag> 
        }
        <CartIcon/>
      </PageGroupTag>
      {
        cartHidden? (null): (<CartDropdown />) 
      }
      
    </HeaderTag>
  );
}

const mapStateToProps = state => ({
  currentUser : state.user.currentUser,
  cartHidden: state.cart.cartHidden
})

export default connect(mapStateToProps)(Header);
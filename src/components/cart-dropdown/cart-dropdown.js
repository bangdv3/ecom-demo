import React from 'react';
import ButtonRect from '../button-rect/button-rect';


import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';

const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(item => (<CartItem key={item.id} item = {item}/>))
        }
        
      </div>
      <ButtonRect type = 'submit'> Go to Checkout</ButtonRect>
    </div>
  );
}

const mapStateToProps = ({cart}) => ({
  cartItems: cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);
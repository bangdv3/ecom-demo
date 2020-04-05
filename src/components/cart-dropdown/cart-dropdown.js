import React from 'react';
import ButtonRect from '../button-rect/button-rect';

import './cart-dropdown.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <div className='cart-item'>

        </div> 
      </div>
      <ButtonRect type = 'submit'> Go to Checkout</ButtonRect>
    </div>
  );
}


export default CartDropdown;
import React from 'react';
import './cart-item.scss'

//dislay inline of cart detail
const CartItem = ({item: { imageUrl,name, price, qty}})=> {
  return (
    <div className='cart-item'> 
      <img className=' item-image' src={imageUrl} alt = 'item'/>
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{qty} x ${price}</span>
      </div>

    </div>
  );
}

export default CartItem;
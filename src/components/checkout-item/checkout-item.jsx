import React from 'react';
import './checkout-item.scss'

const CheckoutItem = ({item}) => {
  return (
    <div className='checkout-item'> 
      <img className='image-container' alt ='' src={item.imageUrl}/>
      <span className='name'>{item.name}</span>
      <span className='quantity'>{item.qty}</span>
      <span className='price'>{item.price}</span> 
      <div className='remove-button'> &#10005;</div>
    </div>
  );
}

export default CheckoutItem;
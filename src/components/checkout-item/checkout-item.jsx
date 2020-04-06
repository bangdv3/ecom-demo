import React from 'react';
import './checkout-item.scss'
import { connect } from 'react-redux';
import { clearItem, addItem, subtractItem } from '../../redux/cart/cart-action';

const CheckoutItem = ({item, clearItem, addItem, subtractItem}) => {
  return (
    <div className='checkout-item'> 
      <img className='image-container' alt ='' src={item.imageUrl}/>
      <span className='name'>{item.name}</span>
      <span className='quantity'>
        <div className='arrow'
          onClick={() => subtractItem(item)}
        >&#10094;</div>
        <span className='value'>{item.qty} </span> 
        <div className='arrow'
          onClick={() => addItem(item)}
        >&#10095;</div>
      </span>
      <span className='price'>{item.price}</span> 
      <div className='remove-button'
        onClick={() => clearItem(item)}
      > &#10005;</div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  subtractItem: item => dispatch(subtractItem(item))
})

export default connect(null, mapDispatchToProps) (CheckoutItem);
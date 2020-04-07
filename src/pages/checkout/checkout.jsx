import React from 'react';
import './checkout.scss'
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selector';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripCheckOutBtn from '../../components/stripe-checkout-btn/stripe-checkout-btn';





const CheckOut =({cartItems, cartTotal}) => {
  return (
    <div className='checkout-page'>  
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Qantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item => ( 
          <CheckoutItem key={item.id} item = {item}/>
        ))
      }

      <div className='total'>
        <span> TOTAL: ${cartTotal}</span>
      </div>
      <StripCheckOutBtn price={cartTotal}/>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state)
})

export default connect(mapStateToProps) (CheckOut) ;
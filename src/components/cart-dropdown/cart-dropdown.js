import React from 'react';
import ButtonRect from '../button-rect/button-rect';


import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart-action';

const CartDropdown = ({cartItems, history, toggleCartHidden }) => {

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length?
          cartItems.map(item => (<CartItem key={item.id} item = {item}/>))
          :
          (<span className='empty-message'> your cart is empty </span>)
        }
        
      </div>
      <ButtonRect 
        type = 'submit' btnLabel='Go to Checkout'
        onClick = {() => {
          history.push('/checkout')
          toggleCartHidden()
        }} 
        />
    </div>
  );
}

const mapStateToProps = ({cart}) => ({
  cartItems: cart.cartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
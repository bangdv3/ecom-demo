import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import './cart-icon.scss'

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-action';
import { selectCartItemsCount } from '../../redux/cart/cart-selector';




const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden} >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'> {itemCount} </span>
    </div>
  );
}

// const mapStateToProps = ({cart: {cartItems}})=>({
//   itemCount: cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.qty, 0)
// })

const mapStateToProps = state=>({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps =  dispatch =>({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

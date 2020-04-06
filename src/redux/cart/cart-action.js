import CartActionTypes from './cart-action-types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item =>({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const subtractItem = item =>({
  type: CartActionTypes.SUBTRACT_ITEM,
  payload: item
})

export const clearItem = item =>({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
})
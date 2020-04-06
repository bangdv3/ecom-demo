import CartActionTypes from './cart-action-types'

const INIT_STATE = {
  cartHidden: true,
  cartItems: []
}

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state, 
        cartHidden: !state.cartHidden
      }
    case CartActionTypes.ADD_ITEM: 
      return {
        ...state, 
        cartItems: addItemToCart(state.cartItems, action.payload) //[...state.cartItems, action.payload]
      }
    case CartActionTypes.SUBTRACT_ITEM: 
      return {
        ...state, 
        cartItems: subtractItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM: 
      return {
        ...state, 
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id )
      }
    default: 
      return state;

  }
}

export default cartReducer;

// Untility to update Cart

const addItemToCart = (items, itemToAdd) => { 
  const existingItem = items.find(finding_item => finding_item.id === itemToAdd.id)
  if (existingItem) return (
    items.map(item => item.id === itemToAdd.id? {...item, qty: item.qty + 1}: item )
  )   
  return [...items, {...itemToAdd, qty: 1}] 
}

const subtractItemFromCart = (items, itemToSubttract) => {
  const existingItem = items.find(finding_item => finding_item.id === itemToSubttract.id)
  if (existingItem) {
    if (existingItem.qty > 1) {
      return (
      items.map(item => item.id === itemToSubttract.id? {...item, qty: item.qty - 1}: item )
    )}else {
      return items.filter(item => item.id !== itemToSubttract.id )
    } 
  } 
}
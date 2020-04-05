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
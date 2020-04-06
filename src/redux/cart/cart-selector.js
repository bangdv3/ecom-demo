import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCart],
  (cart) => cart.cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.qty, 0)
);
export const selectCartTotal = createSelector(
  [selectCart],
  (cart) => cart.cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.qty * cartItem.price, 0)
);


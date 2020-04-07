import { createSelector } from "reselect";

const selectShop = state => state.shop;



const colmapIDs = {
  hats: 1,
  jackets: 2,
  sneakers: 3,
  men: 5, 
  women:4 
}

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = colUrlparam => createSelector(
  [selectShop],
  shop => shop.collections.find(collection =>  collection.id === colmapIDs[colUrlparam])
)
import { ShopActionTypes } from './shop-action-types'

export const updateCollection = collectionMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
})
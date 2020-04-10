import SHOPDATA from './shopitems'
import {ShopActionTypes} from './shop-action-types'

const INIT_STATE =  {
  collections: SHOPDATA
  // collections: null
}

const shopReducer = (state = INIT_STATE, action ) => {
  switch(action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS: 
      return {
        ...state, 
        collections: action.payload
      }
    default: return state;
  }
}
export default shopReducer
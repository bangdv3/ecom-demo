import SHOPDATA from './shopitems'
const INIT_STATE =  {
  collections: SHOPDATA
}

const shopReducer = (state = INIT_STATE, action ) => {
  switch(action) {
    default: return state;
  }
}
export default shopReducer
import React, { Component } from 'react';
import shopitems from'./shopitems'
import CollectionPreview from '../../components/collection-pre/collection-pre';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      colections: shopitems
     }
  }
  render() { 
    return ( 
      <div className="shop-page">
        SHOP PAGE
        {
          this.state.colections.map(({id, ...orthers}) => (
            <CollectionPreview key={id} {...orthers} />
          ))
        } 
      </div> 
    );
  }
}
 
export default ShopPage;
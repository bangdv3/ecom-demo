import React from 'react';
import './collection-item.scss'
import ButtonRect from '../button-rect/button-rect';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-action';


const CollectionItem = ({item, addItem}) => {
  const {name, imageUrl, price} = item ;
  return (
    <div className="collection-item">
      <div className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      
      <div className="collection-footer">
      <span>{name}</span>
      <span className="price">{price}</span>
      </div>
      <ButtonRect inverted={true} btnLabel='Add To Cart'
        onClick={() => addItem(item)}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
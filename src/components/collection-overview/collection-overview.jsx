import React from 'react';
import CollectionPreview from '../collection-pre/collection-pre';
import { connect } from 'react-redux'; 
import {selectCollectionForPreview} from '../../redux/shop/shop-selector'
import './collection-overview.scss'

const CollectionOverview = ({collections}) =>{
  
  return (
    <div className='collection-overview'>
      {
        collections.map(({id, ...orthers}) => (
          <CollectionPreview  key={id} {...orthers} />
        ))
      }
      
    </div>
  );
}
const mapStateToProps = state => ({
  collections: selectCollectionForPreview(state)
})


export default connect(mapStateToProps)(CollectionOverview);
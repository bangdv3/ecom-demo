import React from 'react';
import CollectionPreview from '../collection-pre/collection-pre';
import { connect } from 'react-redux'; 

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
  collections: state.shop.collections
})


export default connect(mapStateToProps)(CollectionOverview);
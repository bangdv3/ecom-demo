import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item';
import { connect } from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selector'
import './collection.scss'


const CollectionPage = ({match, collection})=>{
  if (!collection) return (<div>no collection</div>)
  const {title, items} = collection
  return (
    <div className='collection-page'>
      <h2>{match.params.categoryID} {title} Category</h2>
      <div className='items'>
        {
          items.map( item => <CollectionItem key = {item.id} item = {item}/> )
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps ) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state)
})

export default connect(mapStateToProps)(CollectionPage);
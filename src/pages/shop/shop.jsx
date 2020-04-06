import React  from 'react';  
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection';
 

const ShopPage = ({match}) => {
  
  return ( 
    <div className="shop-page">
      SHOP PAGE
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:collectionID`} component={CollectionPage}/>
    </div>  
  );
}


const mapStateToProps = state => ({
  itemList: state.shop
})
 
export default connect(mapStateToProps) (ShopPage);
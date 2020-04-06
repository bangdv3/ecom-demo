import React  from 'react'; 
import CollectionPreview from '../../components/collection-pre/collection-pre';
import { connect } from 'react-redux';

// import {selectCollections} from '../../redux/shop/shop-selector'



const ShopPage = ({itemList}) => {
  return ( 
    <div className="shop-page">
      SHOP PAGE
      {
        itemList.collections.map(({id, ...orthers}) => (
          <CollectionPreview key={id} {...orthers} />
        ))
      } 
    </div> 
  );
}


const mapStateToProps = state => ({
  itemList: state.shop
})
 
export default connect(mapStateToProps) (ShopPage);
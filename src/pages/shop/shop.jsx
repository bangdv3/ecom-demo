import React ,{ Component }  from 'react';  
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection';
 
import { firestore, convertCollections2map } from '../../firebase/firebase';
import {updateCollection} from '../../redux/shop/shop-actions';
import WithSpinner from '../../components/with-spinner/with-spinner';
import collectionOverview from '../../components/collection-overview/collection-overview';

const LoadingCollectionOverview = WithSpinner(collectionOverview)
const LoadingCollectionPage = WithSpinner(CollectionPage)

class ShopPage extends Component {

  state = {
    isLoading: true
  } 

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapshot =>{
      const collectionMap = convertCollections2map(snapshot)
      // console.log(collectionMap)
      this.props.updateCollection(collectionMap) 
      this.setState({isLoading: false});
    }) 
  }
  

  render() { 
    // if (this.state.isLoading) return (<div> loading ...</div>)
    const {match} = this.props
    return ( 
      <div className="shop-page">
        <Route exact path={`${match.path}`} 
          render={(props) => <LoadingCollectionOverview isLoading={this.state.isLoading} {...props}/>}
          />
        <Route path={`${match.path}/:collectionID`} 
          // component={CollectionPage}
          render={(props) => <LoadingCollectionPage isLoading={this.state.isLoading} {...props}/>}
          />
      </div>  
    );
  }
}



const mapDispatchToProps = dispatch => ({
  updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
})
 
export default connect(null, mapDispatchToProps) (ShopPage);
import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'

import CollectionPage from '../../components/collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

import './shop.styles.scss';

const CollectionPageWithSpiner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpiner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
    state={
        isLoading: true
    }

    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const { updateCollections } = this.props

        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({isLoading: false})
        })
    }

    render() {
        const {match} = this.props;
        const {isLoading} = this.state;
        console.log(this.props)
        return(
            <div className='shop-page'>
                <Route exact path={match.url} render={props => <CollectionsOverviewWithSpiner isLoading={isLoading} {...props} />} />
                <Route path={`${match.url}/:collectionId`} render={props => <CollectionPageWithSpiner isLoading={isLoading} {...props} />} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
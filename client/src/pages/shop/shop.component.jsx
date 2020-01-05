import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'; 
import CollectionPageContainer from '../../components/collection/collection.container';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import './shop.styles.scss';

const ShopPage = ({ match, fetchCollectionStart }) => {
    
    useEffect(() => {
        fetchCollectionStart()
    }, [fetchCollectionStart])

    return(
        <div className='shop-page'>
            <Route exact path={match.url} component={CollectionsOverviewContainer} />
            <Route path={`${match.url}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
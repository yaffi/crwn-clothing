import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../../components/collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import './shop.styles.scss';

const ShopPage = ({match}) => {

    console.log(match)

    return(
        <div className='shop-page'>
            <Route exact path={match.url} component={CollectionsOverview} />
            <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
        </div>
    )
};

export default ShopPage;
import shopActionTypes from './shop.types'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCSESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionStart());

        collectionRef.get().then(async snapShot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
          dispatch(fetchCollectionSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionFailure(error)));
    };
};
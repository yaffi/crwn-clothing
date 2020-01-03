import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';

import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';

export function* fetchCollectionsAsync() {
    yield console.log("I am fired");

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    }catch(error) {
        yield put(fetchCollectionFailure(error.message));
    }
    


    // const collectionRef = firestore.collection("collections");
    // dispatch(fetchCollectionStart());

    // collectionRef
    //   .get()
    //   .then(async snapShot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    //     dispatch(fetchCollectionSuccess(collectionsMap));
    //   })
    //   .catch(error => dispatch(fetchCollectionFailure(error)));
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
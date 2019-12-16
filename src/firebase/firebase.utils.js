import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLhZ4w5mdOrYlFuZQMESdQ45vfVjscFxQ",
    authDomain: "crwn-db-a3c50.firebaseapp.com",
    databaseURL: "https://crwn-db-a3c50.firebaseio.com",
    projectId: "crwn-db-a3c50",
    storageBucket: "crwn-db-a3c50.appspot.com",
    messagingSenderId: "994247694333",
    appId: "1:994247694333:web:1b187c448aecf631092b94",
    measurementId: "G-7Y7ES2WQG4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const creatAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                creatAt,
                ...additionalData
            });
        }catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
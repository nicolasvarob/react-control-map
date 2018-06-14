import firebase from 'firebase'
import keys from './keys/firebaseAccount.json';
const config = {
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    databaseURL: keys.databaseURL,
    projectId: keys.projectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.messagingSenderId
};

firebase.initializeApp(config);

export default firebase;
import firebase from 'firebase';
import 'firebase/database';

import keys from './keys/firebase-config.json';

const config = keys;

firebase.initializeApp(config);

const database = firebase.database();
export const homesRef = database.ref('homes');
export const patrolsRef = database.ref('patrols');


export default firebase;
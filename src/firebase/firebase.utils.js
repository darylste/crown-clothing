import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyCWslpRauXvkZ5iAHwa1hMZ9iF-xGqB8X4',
	authDomain: 'crown-clothing-db-ced75.firebaseapp.com',
	projectId: 'crown-clothing-db-ced75',
	storageBucket: 'crown-clothing-db-ced75.appspot.com',
	messagingSenderId: '1095800799464',
	appId: '1:1095800799464:web:435e21abf92018bdec895d',
	measurementId: 'G-WNR1JQK684',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

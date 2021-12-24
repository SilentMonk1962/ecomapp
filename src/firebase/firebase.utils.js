import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import firebase from 'firebase/compat/app';


const firebaseConfig={
    apiKey: "AIzaSyCwLTuLw39ni-lNRmYfh6d4CJdWj90J8t4",
    authDomain: "crwn-db-490ee.firebaseapp.com",
    projectId: "crwn-db-490ee",
    storageBucket: "crwn-db-490ee.appspot.com",
    messagingSenderId: "991024052235",
    appId: "1:991024052235:web:1b64f88e5dca21ac16af0e",
    measurementId: "G-5JLX9DWEQR"
  }

  initializeApp(firebaseConfig);
  
  export const auth =getAuth();
  export const firestore =getFirestore();

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> signInWithPopup(auth, provider);

  export default firebase;



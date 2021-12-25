import {initializeApp} from 'firebase/app';
import {setDoc,doc, getDoc, getFirestore} from 'firebase/firestore';

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

  export const createUserProfileDocument = async (userAuth,additonalData)=>{

    if(!userAuth) return;
    const userRef= doc(firestore,"users",`${userAuth.uid}`)
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()){
      const {displayName,email}=userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userRef,{
          displayName,
          email,
          createdAt,
          ...additonalData
        });
      } catch (error) {
        console.log('error creating user',error.message);
      }
    }
  };

  export default firebase;



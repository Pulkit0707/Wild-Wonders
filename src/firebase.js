import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNF1xf1Vsw81N203KmzpUNmlNlLZ_YCxs",
    authDomain: "wild-wonders-27c9a.firebaseapp.com",
    projectId: "wild-wonders-27c9a",
    storageBucket: "wild-wonders-27c9a.appspot.com",
    messagingSenderId: "524368352625",
    appId: "1:524368352625:web:2e3fb1615d863f780c52d0",
    measurementId: "G-NBTDW0211X"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebase.auth()

export {db,auth};

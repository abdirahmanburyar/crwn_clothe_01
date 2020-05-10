import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA8Onv4y47sBGXVxc3WTgYcy-9y7oZhi68",
    authDomain: "crwn-clothing-db-28c98.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-28c98.firebaseio.com",
    projectId: "crwn-clothing-db-28c98",
    storageBucket: "crwn-clothing-db-28c98.appspot.com",
    messagingSenderId: "241073545520",
    appId: "1:241073545520:web:cdcf38da4d19e1a711e8f5"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider  = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ promt: 'select_account'})
  
  export const sigInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;
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
    export const createUserProfileDoc = async userAuth => {
      
      if(!userAuth) return;
      const userRef = await firestore.doc(`users/${userAuth.uid}`)
      const snapShot = userRef.get()
      if(!snapShot.exists){
        const { displayName, email } = userAuth
          const createdAt= new Date()
          try {
            await userRef.set({
                displayName,
                email,
                createdAt
            })
          } catch (err){
              console.log('error occured while creating a user', err)
          }
      }
      return userRef
    }

    export const addColectionAndDocs = async (collectionKey, objectToAdd) => {
      const collectionsRef = await firestore.collection(collectionKey)
      const batch = firestore.batch()

      objectToAdd.forEach(obj => {
        const addNewDoc = collectionsRef.doc()
        console.log(addNewDoc)
        batch.set(addNewDoc, obj)
      })
      return await batch.commit()
    }

    export const convertSnapToMap = async collection => {

      const transformedCollection = collection.docs.map(doc => {
        const { title, items } = doc.data()
        return {
          routeName: encodeURI(title),
          id: doc.id,
          title,
          items
        }
      })
      return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
      }, {})
    }

    export const firestore = firebase.firestore()
    export const auth = firebase.auth()

    const provider = new firebase.auth.GoogleAuthProvider()

    provider.setCustomParameters({ promt: 'select_account'})

    export const signInWithGoogle = () => auth.signInWithPopup(provider)

    export default firebase

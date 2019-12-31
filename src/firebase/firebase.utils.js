import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA7pgIpvj2TCXUUCay0p__3ddcUvZ29huc",
    authDomain: "harmon-mitchell-clothing-db.firebaseapp.com",
    databaseURL: "https://harmon-mitchell-clothing-db.firebaseio.com",
    projectId: "harmon-mitchell-clothing-db",
    storageBucket: "harmon-mitchell-clothing-db.appspot.com",
    messagingSenderId: "290391006428",
    appId: "1:290391006428:web:5edb32fac934ad06a6e819",
    measurementId: "G-XDWKFGQMF6"
  }

  firebase.initializeApp(config) 

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    // console.log(snapShot)

    if (!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set ({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef
  }

  

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase
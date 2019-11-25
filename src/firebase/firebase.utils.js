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

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase
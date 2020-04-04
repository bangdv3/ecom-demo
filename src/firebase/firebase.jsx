import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore'

const fbConfig =  {
  apiKey: "AIzaSyAuyZvZkdxZX71jOcp3Jb79tEvZr96rN_Y",
  authDomain: "fanioapp.firebaseapp.com",
  databaseURL: "https://fanioapp.firebaseio.com",
  projectId: "fanioapp",
  storageBucket: "fanioapp.appspot.com",
  messagingSenderId: "915304542820",
  appId: "1:915304542820:web:1ef318b14558d6838e2571"
}

firebase.initializeApp(fbConfig);

export const auth = firebase.auth()
// export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
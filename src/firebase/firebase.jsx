import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

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
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const fireCreateUser = async (user, addedData) => {
  if (!user) return; 

  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()
  
  if (!snapshot.exists) {
    const {displayName, email} = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email, createdAt, ...addedData
      })
      
    } catch(error) {
      console.log("create user error", error.message)
    }
  }
  

  return userRef;
}

export const fireAddCol2db = async (colKey, collectionsToAdd ) =>{
  const collectionRef = firestore.collection(colKey);
  
  const batch = firestore.batch()
  collectionsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    // console.log(newDocRef)
    batch.set(newDocRef, obj)
  });

  return batch.commit()
}

export const convertCollections2map = (collections) => {
  const trans2Collection = collections.docs.map(doc => {
    const {title, items} = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title,
      items: items
    }
  })
  
  return trans2Collection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export default firebase;
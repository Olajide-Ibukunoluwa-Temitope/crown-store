import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const fbConfig = {
  apiKey: "AIzaSyDDpfQNrirAxjYZN4GyUbC0dRiVQgV8NB8",
  authDomain: "crown-store-93de0.firebaseapp.com",
  databaseURL: "https://crown-store-93de0.firebaseio.com",
  projectId: "crown-store-93de0",
  storageBucket: "crown-store-93de0.appspot.com",
  messagingSenderId: "943160265157",
  appId: "1:943160265157:web:00d7c08f9f7f97109663ac"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;

}

firebase.initializeApp(fbConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
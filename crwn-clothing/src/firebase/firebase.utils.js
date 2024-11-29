// Import the necessary functions from the Firebase SDK
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your Firebase configuration
const config = {
  apiKey: "AIzaSyBi9iK0Veacfg_nRM7YgmbdHSogYfNWDrM",
  authDomain: "crwn-clothing2024.firebaseapp.com",
  projectId: "crwn-clothing2024",
  storageBucket: "crwn-clothing2024.appspot.com",
  messagingSenderId: "477998057942",
  appId: "1:477998057942:web:59ad1e2872d5e3d5617c77",
  measurementId: "G-49P1W8G34B",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(doc("users/1234"));
  // console.log(doc(firestore, "users/lkajfjaflka498797"));

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// Initialize Firebase

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject());
  });
};

// Initialize Firestore and Auth
export const firestore = firebase.firestore();
export const auth = firebase.auth();

// Google Auth Provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Sign in with Google function
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Export auth and firestore
export default firebase;

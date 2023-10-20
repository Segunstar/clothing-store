// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_vWju4RzjJybXm-ItUyLxZJTd3To5mvs",
  authDomain: "clothing-store-db-2503d.firebaseapp.com",
  projectId: "clothing-store-db-2503d",
  storageBucket: "clothing-store-db-2503d.appspot.com",
  messagingSenderId: "709633311312",
  appId: "1:709633311312:web:639ed31545ca8030d0c755",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef, "marker-11");
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("there is an error creating user", error.message);
    }
  }

  return userDocRef;
};

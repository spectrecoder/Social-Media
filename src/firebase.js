import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage"
import {getFirestore} from "@firebase/firestore"
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy, deleteDoc, doc, updateDoc, getDocs  } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIc4XWBbUFO0Tkdo2a6dvATPvo7-S2y4A",
  authDomain: "social-media-cfe27.firebaseapp.com",
  projectId: "social-media-cfe27",
  storageBucket: "social-media-cfe27.appspot.com",
  messagingSenderId: "211286771780",
  appId: "1:211286771780:web:e4617643b462f21ee35411",
  measurementId: "G-GN5FSVQVGY"
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const db = getFirestore(app)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

export {googleProvider, collection, addDoc, getDocs, db, onSnapshot, serverTimestamp,query,orderBy,updateDoc, storage,ref,uploadBytesResumable,getDownloadURL,deleteDoc, doc, deleteObject, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithPopup }
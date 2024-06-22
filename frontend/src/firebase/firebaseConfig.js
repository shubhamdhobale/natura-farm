import { initializeApp } from "firebase/app";
import { getAuth , signOut , signInWithEmailAndPassword , createUserWithEmailAndPassword , sendPasswordResetEmail , GoogleAuthProvider , signInWithPopup} from "firebase/auth";
import { getFirestore , doc , setDoc} from "firebase/firestore";
import { firebaseConfig } from '../config/firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export { auth, db , signOut , createUserWithEmailAndPassword , signInWithEmailAndPassword ,doc ,setDoc , sendPasswordResetEmail , GoogleAuthProvider , signInWithPopup};

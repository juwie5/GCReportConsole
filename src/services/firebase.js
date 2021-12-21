import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyB8uPuW8Rut7lzBLW7zRpGtdUt_Xedt6us",
    authDomain: "gcreportconsole.firebaseapp.com",
    projectId: "gcreportconsole",
    storageBucket: "gcreportconsole.appspot.com",
    messagingSenderId: "327464207511",
    appId: "1:327464207511:web:200cd61a5f68bbbe1e15d2",
    measurementId: "G-KDZ5TG9CKD"
})


const db = getFirestore();

export default db
export const firebaseAuth = getAuth(firebaseApp);
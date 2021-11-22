import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB8uPuW8Rut7lzBLW7zRpGtdUt_Xedt6us",
    authDomain: "gcreportconsole.firebaseapp.com",
    projectId: "gcreportconsole",
    storageBucket: "gcreportconsole.appspot.com",
    messagingSenderId: "327464207511",
    appId: "1:327464207511:web:200cd61a5f68bbbe1e15d2",
    measurementId: "G-KDZ5TG9CKD"
}

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
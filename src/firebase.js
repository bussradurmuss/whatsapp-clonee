import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB4RCx34NBhaBro84bHnPL3f9DrRp9QDtE",
    authDomain: "wp-app-clone.firebaseapp.com",
    projectId: "wp-app-clone",
    storageBucket: "wp-app-clone.appspot.com",
    messagingSenderId: "747831062262",
    appId: "1:747831062262:web:1304ab81922e5dcdf586d7",
    measurementId: "G-0D925WXQ06"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export {
    auth,
    provider
};
export default db;

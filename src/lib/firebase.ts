import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAHoeWdxFFFvez3N01xb67FjhTdo4dQILE",
    authDomain: "linktree-48d7c.firebaseapp.com",
    projectId: "linktree-48d7c",
    storageBucket: "linktree-48d7c.appspot.com",
    messagingSenderId: "773823950549",
    appId: "1:773823950549:web:37e86fbae54c9acd87fc5c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

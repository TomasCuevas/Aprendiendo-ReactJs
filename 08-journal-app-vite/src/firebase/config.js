// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCy2SXVfD7e9gZeYRLlTAtsp2MxwsU7-_Y',
  authDomain: 'react-cursos-970bd.firebaseapp.com',
  projectId: 'react-cursos-970bd',
  storageBucket: 'react-cursos-970bd.appspot.com',
  messagingSenderId: '75633976380',
  appId: '1:75633976380:web:8ea7a9c81cdf6544c48f39',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

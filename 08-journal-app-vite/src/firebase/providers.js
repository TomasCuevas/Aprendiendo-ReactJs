import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = await result.user;

    return {
      ok: true,
      // user info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (err) {
    return {
      ok: false,
      errorMessage: err.message,
    };
  }
};

export const registerUserWithEmailPassword = async ({ displayName, email, password }) => {
  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    const { uid, photoURL } = result.user;

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (err) {
    return {
      ok: false,
      errorMessage: err.message,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL, displayName } = result.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
      email,
    };
  } catch (err) {
    return {
      ok: false,
      errorMessage: err.message,
    };
  }
};

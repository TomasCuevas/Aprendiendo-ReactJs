import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

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
    const errorMessage = err.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

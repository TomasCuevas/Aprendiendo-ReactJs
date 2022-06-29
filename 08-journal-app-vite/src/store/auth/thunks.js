import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from '../../firebase/providers';
import { checkingCredentials, logout, login } from './authSlice';

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignin = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    const { ok, errorMessage } = result;
    if (!ok) return dispatch(logout(errorMessage));

    dispatch(login(result));
  };
};

export const startRegisterUserWithEmailPassword = ({ displayName, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({ displayName, email, password });
    const { ok, errorMessage } = result;
    if (!ok) return dispatch(logout(errorMessage));

    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    const { ok, errorMessage } = result;
    if (!ok) return dispatch(logout(errorMessage));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    await logoutFirebase();

    dispatch(logout());
  };
};

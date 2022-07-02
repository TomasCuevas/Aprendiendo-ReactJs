/* eslint-disable no-undef */
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import {
  startCheckingAuthentication,
  startGoogleSignin,
  startLoginWithEmailPassword,
  startLogout,
  startRegisterUserWithEmailPassword,
} from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal/journalSlice';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers');

/* eslint-disable no-undef */
describe('Pruebas en authThunks', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de invocar el checkingCredentials', async () => {
    await startCheckingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('startGoogleSignin debe de llamar checkingCredentials y login - exito', async () => {
    const loginData = { ok: true, ...demoUser };

    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignin()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startGoogleSignin debe de llamar checkingCredentials y logout - error', async () => {
    const errorMessage = 'Error al realizar el login.';
    const loginData = { ok: false, errorMessage };

    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignin()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(errorMessage));
  });

  test('startRegisterUserWithEmailPassword debe de llamar checkingCredentials y login - exito', async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = {
      displayName: demoUser.displayName,
      email: demoUser.email,
      password: '123456',
    };

    await registerUserWithEmailPassword.mockResolvedValue(loginData);
    await startRegisterUserWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startRegisterUserWithEmailPassword debe de llamar checkingCredentials y logout - error', async () => {
    const errorMessage = 'Error al registrar el usuario.';
    const loginData = { ok: false, errorMessage };
    const formData = {
      displayName: demoUser.displayName,
      email: demoUser.email,
      password: '123456',
    };

    await registerUserWithEmailPassword.mockResolvedValue(loginData);
    await startRegisterUserWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(errorMessage));
  });

  test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - exito', async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: '123456' };

    await loginWithEmailPassword.mockResolvedValue(loginData);
    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startLoginWithEmailPassword debe de llamar checkingCredentials y logout - error', async () => {
    const errorMessage = 'Error al realizar el login.';
    const loginData = { ok: false, errorMessage };
    const formData = { email: demoUser.email, password: '123456' };

    await loginWithEmailPassword.mockResolvedValue(loginData);
    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(errorMessage));
  });

  test('startLogout debe de llamar checkingCredentials, logout y clearNotesLogout', async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout());
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
  });
});

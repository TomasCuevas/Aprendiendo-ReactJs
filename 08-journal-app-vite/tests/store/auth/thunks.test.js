/* eslint-disable no-undef */
import { signInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { startCheckingAuthentication, startGoogleSignin } from '../../../src/store/auth/thunks';
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
});

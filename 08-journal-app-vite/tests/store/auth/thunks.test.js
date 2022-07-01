/* eslint-disable no-undef */
import { checkingCredentials } from '../../../src/store/auth/authSlice';
import { startCheckingAuthentication } from '../../../src/store/auth/thunks';

jest.mock('../../../src/firebase/providers');

/* eslint-disable no-undef */
describe('Pruebas en authThunks', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de invocar el checkingCredentials', async () => {
    await startCheckingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});

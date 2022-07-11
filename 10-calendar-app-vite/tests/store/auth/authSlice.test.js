/* eslint-disable no-undef */
import { authSlice } from '../../../src/store/auth/authSlice';
import { initialState } from '../../__fixtures/authStates';

describe('Pruebas en authSlice', () => {
  test('debe de retornar el estado inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });
});

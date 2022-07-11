/* eslint-disable no-undef */
import { authSlice, clearErrorMessage, onLogin, onLogout } from '../../../src/store/auth/authSlice';
import { authenticatedState, initialState } from '../../__fixtures/authStates';
import { testUserCredentials } from '../../__fixtures/testUser';

describe('Pruebas en authSlice', () => {
  test('debe de retornar el estado inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('debe de realizar el login correctamente', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));

    expect(state.status).toBe('authenticated');
    expect(state.user).toEqual(testUserCredentials);
    expect(state.errorMessage).toBe(undefined);
  });

  test('debe de realizar el logout correctamente', () => {
    const state = authSlice.reducer(authenticatedState, onLogout());

    expect(state.status).toBe('not-authenticated');
    expect(state.user).toEqual({});
    expect(state.errorMessage).toBe(undefined);
  });

  test('debe de realizar el logout correctamente con mensaje de error', () => {
    const message = 'Credenciales incorrectas.';
    const state = authSlice.reducer(authenticatedState, onLogout(message));

    expect(state.status).toBe('not-authenticated');
    expect(state.user).toEqual({});
    expect(state.errorMessage).toBe(message);
  });

  test('debe limpiar mensaje de error', () => {
    const message = 'Credenciales incorrectas.';
    const state = authSlice.reducer(authenticatedState, onLogout(message));
    const newState = authSlice.reducer(state, clearErrorMessage());

    expect(newState.errorMessage).toBe(undefined);
  });
});

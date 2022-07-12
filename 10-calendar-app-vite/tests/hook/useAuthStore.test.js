import { configureStore } from '@reduxjs/toolkit';
import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import calendarApi from '../../src/apis/calendarApi';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { authSlice } from '../../src/store';
import { initialState } from '../__fixtures/authStates';
import { testUserCredentials } from '../__fixtures/testUser';

/* eslint-disable no-undef */
const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: initialState,
    },
  });
};

describe('Pruebas en el useAuthStore', () => {
  beforeEach(() => localStorage.clear());

  test('debe de regresar los valores por defecto', () => {
    const mockStore = getMockStore(initialState);
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>,
    });

    expect(result.current).toEqual({
      errorMessage: undefined,
      status: 'checking',
      user: {},
      checkAuthToken: expect.any(Function),
      startLogin: expect.any(Function),
      startLogout: expect.any(Function),
      startRegister: expect.any(Function),
    });
  });

  test('startLogin debe de realizar el login correctamente', async () => {
    const mockStore = getMockStore(initialState);
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>,
    });

    await act(async () => {
      await result.current.startLogin(testUserCredentials);
    });

    const { errorMessage, status, user } = result.current;
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { name: testUserCredentials.name, _id: testUserCredentials._id },
    });
    expect(localStorage.getItem('token')).toEqual(expect.any(String));
    expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String));
  });

  test('startLogin debe de fallar la autenticacion', async () => {
    const mockStore = getMockStore(initialState);
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>,
    });

    await act(async () => {
      await result.current.startLogin({ email: 'hola@gmail.com', password: '12345678' });
    });

    const { errorMessage, status, user } = result.current;
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: expect.any(String),
      status: 'not-authenticated',
      user: {},
    });
    expect(localStorage.getItem('token')).toBe(null);
  });

  test('startRegister debe de crear un usuario', async () => {
    const mockStore = getMockStore(initialState);
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>,
    });

    const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
      data: {
        ok: true,
        _id: '1234567810',
        name: 'test2',
        token: 'algun-token',
      },
    });

    await act(async () => {
      await result.current.startRegister({
        email: 'test2@email.com',
        name: 'test2',
        password: 'testpassword',
      });
    });

    const { status, user, errorMessage } = result.current;
    expect({ status, user, errorMessage }).toEqual({
      status: 'authenticated',
      user: { name: 'test2', _id: expect.any(String) },
      errorMessage: undefined,
    });
    expect(localStorage.getItem('token')).toEqual(expect.any(String));

    spy.mockRestore();
  });

  test('startRegister debe de fallar la creacion', async () => {
    const mockStore = getMockStore(initialState);
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>,
    });

    await act(async () => {
      await result.current.startRegister(testUserCredentials);
    });

    const { errorMessage, status, user } = result.current;
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: expect.any(String),
      status: 'not-authenticated',
      user: {},
    });
  });
});

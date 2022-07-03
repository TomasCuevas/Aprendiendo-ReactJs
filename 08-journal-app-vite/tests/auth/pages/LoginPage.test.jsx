/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth/authSlice';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const mockStartGoogleSignIn = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSignin: () => mockStartGoogleSignIn,
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe('Pruebas en el componente <LoginPage />', () => {
  test('debe de mostrar el componente correctamente', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });

  test('boton de google debe de llamar el "onGoogleSignin"', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    );

    const googleBtn = screen.getByLabelText('google-btn');
    fireEvent.click(googleBtn);

    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  test('submit debe de llamar "startLoginWithEmailPaswword"', () => {
    const email = 'prueba@gmail.com';
    const password = '1234567';

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    );

    const emailField = screen.getByRole('textbox', { name: 'Correo' });
    fireEvent.change(emailField, { target: { name: 'email', value: email } });

    const passwordField = screen.getByLabelText('password-input');
    fireEvent.change(passwordField, { target: { name: 'password', value: password } });

    const loginForm = screen.getByLabelText('form-login');
    fireEvent.submit(loginForm);
  });
});

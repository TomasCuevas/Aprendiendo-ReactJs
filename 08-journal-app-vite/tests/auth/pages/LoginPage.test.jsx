/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { store } from '../../../src/store/store';

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
});

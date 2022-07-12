/* eslint-disable no-undef */
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks';
import { AppRouter } from '../../src/router/AppRouter';

jest.mock('../../src/hooks/useAuthStore');
jest.mock('../../src/calendar/pages/CalendarPage.jsx', () => ({
  CalendarPage: () => <h1 aria-label="calendar-page">CalendarPage</h1>,
}));

describe('Pruebas en el <AppRouter />', () => {
  const mockCheckAuthToken = jest.fn();

  test('debe de mostrar la pantalla de carga y llamar checkAuthToken', () => {
    useAuthStore.mockReturnValue({
      status: 'checking',
      checkAuthToken: mockCheckAuthToken,
    });

    render(<AppRouter />);

    expect(screen.getByLabelText('loading')).toBeTruthy();
    expect(mockCheckAuthToken).toHaveBeenCalled();
  });

  test('debe de mostrar el login si no esta autenticado', () => {
    useAuthStore.mockReturnValue({
      status: 'not-authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>,
    );

    expect(screen.getByLabelText('login-page')).toBeTruthy();
    expect(mockCheckAuthToken).toHaveBeenCalled();
  });

  test('debe de mostrar el calendario si esta autenticado', () => {
    useAuthStore.mockReturnValue({
      status: 'authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>,
    );

    expect(screen.getByLabelText('calendar-page')).toBeTruthy();
    expect(mockCheckAuthToken).toHaveBeenCalled();
  });
});

/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks';
import { AppRouter } from '../../src/router/AppRouter';

jest.mock('../../src/hooks/useAuthStore');

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
});

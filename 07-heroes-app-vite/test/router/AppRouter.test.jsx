import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en el <AppRouter />', () => {

  test('debe de mostrar la pagina LOGIN si no esta autenticado', () => {
    const contextValue = { logged: false }
    
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/marvel']}>

          <AppRouter />

        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('LoginPage') ).toBeTruthy();
  });

  test('debe de mostrar la pagina MARVEL si esta autenticado', () => {
    const contextValue = { logged: true, user: { id: '123', name: 'Tomas Cuevas' } };
    
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>

          <AppRouter />

        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Marvel Comics') ).toBeTruthy();
  });

})
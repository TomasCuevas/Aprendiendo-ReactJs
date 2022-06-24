import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

describe('Pruebas en el componente <Navbar />', () => {

  const logout = jest.fn(); 
  const contextValues = { logged: true, user: { id: '123', name: 'Tomas Cuevas' }, logout };

  beforeEach( () => jest.clearAllMocks() );

  test('debe de mostrar el nobmre del usuario', () => {
    render(
      <AuthContext.Provider value={ contextValues }>
        <MemoryRouter>

          <Navbar />
          
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByLabelText('username').innerHTML ).toBe( contextValues.user.name );
  });

  test('debe de llamar el logout y el navigate cuando se hace click en el boton', () => {

    
    render(
      <AuthContext.Provider value={ contextValues }>
        <MemoryRouter>

          <Navbar />
          
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const button = screen.getByLabelText('button-logout');
    fireEvent.click( button );

    expect( logout ).toHaveBeenCalled();
    expect( mockedUseNavigate ).toHaveBeenCalledWith( '/login', {'replace': true} );
  });

})
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRouter } from "../../src/router/PrivateRouter";

describe('Pruebas en el <PrivateRouter />', () => {

  test('debe de mostrar el children si esta autenticado', () => {
    const contextValues = { logged: true, user: { id: '123', name: 'Tomas Cuevas' } }

    Storage.prototype.setItem = jest.fn();
    
    render(
      <AuthContext.Provider value={ contextValues }>
        <MemoryRouter>

          <PrivateRouter>
            <h1>Ruta Privada</h1>
          </PrivateRouter>

        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Ruta Privada') ).toBeTruthy();
    expect( localStorage.setItem ).toHaveBeenCalled();
  });

})
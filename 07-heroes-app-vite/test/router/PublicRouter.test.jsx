import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRouter } from "../../src/router/PublicRouter";

describe('Pruebas en el <PublicRouter />', () => {

  const contextValues = {
    logged: false
  }
  
  test('debe de mostrar el children si no esta autenticado', () => {
    render(
      <AuthContext.Provider value={{ contextValues }}>
        <PublicRouter>
          <h1>Ruta Publica</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Ruta Publica') ).toBeTruthy();
  });

})
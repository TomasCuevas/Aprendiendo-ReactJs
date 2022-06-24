import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from "../../src/auth";
import { MarvelPage } from "../../src/heroes/pages/MarvelPage";
import { PublicRouter } from "../../src/router/PublicRouter";

describe('Pruebas en el <PublicRouter />', () => {

  const user = { id: '123', name: 'Tomas Cuevas' };
  
  test('debe de mostrar el children si no esta autenticado', () => {
    const contextValues = { logged: false };

    render(
      <AuthContext.Provider value={{ contextValues }}>
        <PublicRouter>
          <h1>Ruta Publica</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Ruta Publica') ).toBeTruthy();
  });

  test('debe de navegar si esta autenticado', () => {
    const contextValues = { logged: true, user };
    
    render(
      <AuthContext.Provider value={ contextValues }>
        <MemoryRouter initialEntries={['/login']}>

          <Routes>
            <Route path='/login' element={
              <PublicRouter>
                <h1>Ruta Publica</h1>
              </PublicRouter>
            } />
            <Route path='/marvel' element={ <h1>Pagina de Marvel</h1> } />
          </Routes>
          
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    expect( screen.getByText('Pagina de Marvel') ).toBeTruthy();
  });

})
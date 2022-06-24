import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

describe('Pruebas en el <SearchPage />', () => {

  test('debe de mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar a Batman y el input con el valor del queryString', () => {
    const search = 'batman'
    
    const { container } = render(
      <MemoryRouter initialEntries={[`/search?q=${search}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByLabelText( 'search-input' );
    expect( input.value ).toBe( search )

    const img = screen.getByRole('img');
    expect( img.src ).toContain( '/assets/heroes/dc-batman.jpg' )
  });

})
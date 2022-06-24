import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

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
    const search = 'batman';
    
    render(
      <MemoryRouter initialEntries={[`/search?q=${search}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByLabelText( 'search-input' );
    expect( input.value ).toBe( search );

    const img = screen.getByRole('img');
    expect( img.src ).toContain( '/assets/heroes/dc-batman.jpg' );
  });

  test('debe de mostrar un error si no se encuentra el hero', () => {
    const search = 'baaaattmaaaan';
    
    render(
      <MemoryRouter initialEntries={[`/search?q=${search}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const errorDiv = screen.getByLabelText( 'error-search' );
    expect( errorDiv ).toBeTruthy();
  });

  test('debe de llamar el navigate a la pantalla nueva', () => {
    const search = 'batman';
    
    render(
      <MemoryRouter initialEntries={[`/search`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByLabelText( 'search-input' );
    fireEvent.change( input, { target: { name: 'searchText', value: search } } );
    
    const button = screen.getByLabelText( 'search-button' );
    fireEvent.click( button );

    expect( mockedUseNavigate ).toHaveBeenCalledWith( `?q=${search}` );
  });

})
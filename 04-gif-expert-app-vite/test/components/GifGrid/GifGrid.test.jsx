import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../../src/components';
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';

jest.mock('../../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

  const category = 'One Punch';
  
  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      gifs: [], 
      isLoading: true
    });
    
    render( <GifGrid category={category} /> );

    expect( screen.getByText('Loading...') );
    expect( screen.getByText(category) );
  });

  test('debe de mostrar items cuando se carga las imagenes desde useFetchGifs', () => {
    const gifs = [
      { id: 'ABC', title: 'Titulo 1', url: 'https://localhost/image.jpg' },
      { id: 'DEF', title: 'Titulo 2', url: 'https://localhost/image2.jpg' },
    ]
    
    useFetchGifs.mockReturnValue({
      gifs: gifs,
      isLoading: false
    });

    render( <GifGrid category={category} /> );

    expect( screen.getAllByRole('img').length ).toBe( 2 );
  });

})
import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

  const inputValue = 'Dragon Ball';
  
  test('debe de mostrar un h1 con el texto "GifExpertApp"', () => {
    render( <GifExpertApp /> );
    const h1 = screen.getByRole('heading', { level: 1 });

    expect( h1.innerHTML ).toBe( 'GifExpertApp' );
  });

  test('debe llamar la funcion onAddCategory y agregar nueva categoria', () => {
    render( <GifExpertApp /> );
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form );

    const h3s = screen.getAllByRole('heading', { level: 3 });

    expect( h3s.length ).toBe( 2 );
  })

})
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../../src/components';

describe('Pruebas en <GifGrid />', () => {

  const category = 'One Punch';
  
  test('debe de mostrar el loading inicialmente', () => {
    render( <GifGrid category={category} /> );

    expect( screen.getByText('Loading...') );
    expect( screen.getByText(category) );
  })
})
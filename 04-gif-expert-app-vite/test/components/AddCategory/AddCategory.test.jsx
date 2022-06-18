import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from "../../../src/components/AddCategory/AddCategory";

describe('Pruebas en el componente <AddCategory />', () => {

  const inputValue = 'Gatos';
  
  test('debe de cambiar el valor de la caja de texto', () => {
    render( <AddCategory onNewCategory={() => {}} /> )
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });
    
    expect(input.value).toBe( inputValue );
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    render( <AddCategory onNewCategory={() => {}} /> );
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form );

    expect( input.value ).toBe( '' );
  });

})
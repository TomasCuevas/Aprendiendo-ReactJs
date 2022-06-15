import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {

  const value = 100;
  
  test('debe hacer match con el snapshot', () => {
    const { container } = render( <CounterApp value={ value } /> );
    expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial de 100', () => {
    render( <CounterApp value={ value } /> );
    expect( screen.getByText(value).innerHTML ).toBeTruthy();
  });

})
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultiplesCustomHook />', () => {

  const author = 'Anselmo';
  const quote = 'Hola Mundo';
  
  useFetch.mockReturnValue({
    data: null,
    isLoading: true,
    hasError: null
  });

  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  
  test('debe de mostrar el componente por defecto', () => {
    render( <MultipleCustomHooks /> );

    expect( screen.getByText('Loading...') );
    expect( screen.getByText('Breaking Bad Quotes') );

    const nextButtom = screen.getByRole('button', { name: 'Next Quote' })
    expect( nextButtom.disabled ).toBeTruthy();
  });

  test('debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: author, quote: quote }],
      isLoading: false,
      hasError: null
    })

    render( <MultipleCustomHooks /> )
    expect( screen.getByText(author) ).toBeTruthy();
    expect( screen.getByText(quote) ).toBeTruthy();

    const nextButtom = screen.getByRole('button', { name: 'Next Quote' })
    expect( nextButtom.disabled ).toBeFalsy();
  });

  test('debe de llamar la funcion de incrementar', () => {
    useFetch.mockReturnValue({
      data: [{ author: author, quote: quote }],
      isLoading: false,
      hasError: null
    })

    render( <MultipleCustomHooks /> );
    const nextButtom = screen.getByRole('button', { name: 'Next Quote' })
    fireEvent.click( nextButtom );

    expect( mockIncrement ).toHaveBeenCalled(); 
  });

})
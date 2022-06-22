import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el hook useCounter', () => {

  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect( counter ).toBe(0);
    expect( increment ).toEqual( expect.any(Function) );
    expect( decrement ).toEqual( expect.any(Function) );
    expect( reset ).toEqual( expect.any(Function) );
  });

  test('debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect( counter ).toBe( 100 );
  });
  
})
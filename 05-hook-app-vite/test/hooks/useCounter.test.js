import { renderHook, act } from "@testing-library/react";
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

  test('debe de incrementar el contador', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
      increment(3);
    })

    expect( result.current.counter ).toBe( 4 );
  });

  test('debe de decrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(3);
    })

    expect( result.current.counter ).toBe( 96 );
  });

  test('debe de resetear el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;

    act(() => {
      increment(5)
      reset();
    })

    expect( result.current.counter ).toBe( 100 );
  });

})
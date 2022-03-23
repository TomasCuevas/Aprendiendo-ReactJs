import { renderHook, act } from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {

    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());

        expect( result.current.counter ).toBe(0);
        expect( typeof result.current.counter ).toBe( 'number' );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );
    })

    test('El counter debe tener un valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));

        expect( result.current.counter ).toBe(100);
    })

    test('Al utilizar la funcion increment, el counter debe tener un valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act( () => {
            increment();
        })

        expect(result.current.counter).toBe(101);
    })

    test('Al utilizar la funcion decrement, el counter debe tener un valor de 99', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement();
        })

        expect(result.current.counter).toBe(99);
    })

    test('Al utilizar la funcion increment, el counter debe tener un valor de 101. Luego al utilizar la funcion reset, debe tener un valor de 100 nuevamente', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;

        act(() => {
            increment();
            reset();
        })

        expect(result.current.counter).toBe(100);
    })
})
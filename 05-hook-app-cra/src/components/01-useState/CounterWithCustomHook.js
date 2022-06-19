import React from 'react';

import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    
    const { state: counter, increment, decrement, reset } = useCounter();
    
    return (
        <>
            <h1>Counter with Custom Hook: { counter }</h1>
            <hr />

            <button
                onClick={ () => increment() }
            >
                +1
            </button>
            <button
                onClick={ reset }
            >
                Reset
            </button>
            <button
                onClick={ () => decrement() }
            >
                -1
            </button>
        </>
    );
};

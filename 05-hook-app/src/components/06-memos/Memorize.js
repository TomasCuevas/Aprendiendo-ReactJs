import React, { useState } from 'react'

import { Small } from './Small';
import { useCounter } from '../../hooks/useCounter';
import './effects.css';

export const Memorize = () => {
    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>
                Counter: <Small value={ counter }/> 
            </h1>
            <hr />

            <button 
                className='button'
                onClick={ increment }
            >
                +1
            </button>

            <button
                className='button button__show'
                onClick={ () => setShow( !show ) }
            >
                Mostrar/Ocultar { JSON.stringify( show ) }
            </button>
        </>
    )
}

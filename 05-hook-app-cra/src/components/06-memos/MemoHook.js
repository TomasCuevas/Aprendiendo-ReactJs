import React, { useMemo, useState } from 'react'

import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';
import './effects.css';

export const MemoHook = () => {
    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small> </h3>
            <hr />
            
            <p>{ memoProcesoPesado }</p>

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

import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';

import { useFetch } from '../../hooks/useFetch';
import '../03-examples/effects.css';

export const Layout = () => {
    const refQuote               = useRef();
    const [boxSize, setBoxSize] = useState({});
    const { counter, increment } = useCounter(1);
    const { data }               = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    const { quote } = !!data && data[0];

    useLayoutEffect( () => {

        setBoxSize( refQuote.current.getBoundingClientRect() )
        
    }, [quote])
    
    return (
        <>  
            <h1 className='title'>LayoutEffect</h1>
            <hr/>

            <pre>
                { JSON.stringify( boxSize, null, 10 ) }
            </pre>

            <blockquote className='blockquote__container'>
                <p 
                    ref={ refQuote }
                    className='quote'
                >
                    { quote }
                </p>
            </blockquote>

            <button 
                className='next__quoter'
                onClick={ increment }
            >
                Siguiente Frase
            </button>
        </>
    )
}

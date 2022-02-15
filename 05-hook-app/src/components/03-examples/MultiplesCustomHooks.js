import React from 'react'
import { useCounter } from '../../hooks/useCounter';

import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const MultiplesCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { data, loading }      = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { author, quote } = !!data && data[0];
    
    return (
        <>  
            <h1 className='title'>Breaking Bad Quotes</h1>
            <hr/>

            {
                ( loading )
                ?
                    (
                        <div className='loading__container'>
                            <span>Loading...</span>
                        </div>
                    )
                : 
                    (
                        <blockquote className='blockquote__container'>
                            <p className='quote'>{ quote }</p>
                            <footer className='author'> - { author }</footer>
                        </blockquote>
                    )
            }
            <button 
                className='next__quoter'
                onClick={ increment }
            >
                Siguiente Frase
            </button>
        </>
    )
}

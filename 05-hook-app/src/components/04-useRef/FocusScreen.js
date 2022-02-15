import React, { useRef } from 'react'

import './effects.css';

export const FocusScreen = () => {
    const input_ref = useRef();
    
    const handleClick = () => {
        // document.querySelector('input').select();
        input_ref.current.select();
    }
    
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input  
                ref={ input_ref }
                className='input__container'
                placeholder='Ingrese su nombre'
            />

            <button
                className='button'
                onClick={ () => handleClick() }
            >
                Focus
            </button>
      </>
    )
}

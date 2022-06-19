import React, { useState } from 'react';

import { MultiplesCustomHooks } from '../03-examples/MultiplesCustomHooks';
import './effects.css';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow( !show );
    }
    
    return (
        <>
            <h1>Real Example Ref</h1>
            <hr/>

            { show && <MultiplesCustomHooks /> }
            <button
                className='button'
                onClick={ () => handleShow() }
            >
                Mostrar/Ocultar
            </button>
        </>
    )
}

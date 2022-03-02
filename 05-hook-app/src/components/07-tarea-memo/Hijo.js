import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {
    
    console.log( 'Me volvi a renderizas' );
    
    return (
        <button
            className='btn'
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})

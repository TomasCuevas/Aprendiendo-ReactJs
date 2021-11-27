import React from 'react';
// import { Fragment } from 'react';

const PrimeraApp = ( { saludo = 'Hola Mundo' } ) => {

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
            <p>Mi primer componente</p>
        </>
    );
}

export default PrimeraApp
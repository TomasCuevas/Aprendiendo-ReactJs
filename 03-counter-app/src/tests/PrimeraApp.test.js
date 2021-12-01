import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe( 'Pruebas en <PrimeraApp />', () => {

    test( 'Debe de mostrar el mensaje ( Hola, Juanito )', () => {

        const saludo = 'Hola, Juanito';

        const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

        expect( getByText( saludo ) ).toBeInTheDocument(  )
    });
    
});
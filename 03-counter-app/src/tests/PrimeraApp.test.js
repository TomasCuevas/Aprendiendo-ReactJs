import React from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';

import PrimeraApp from '../PrimeraApp';

describe( 'Pruebas en <PrimeraApp />', () => {

    // test( 'Debe de mostrar el mensaje ( Hola, Juanito )', () => {

    //     const saludo = 'Hola, Juanito';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

    //     expect( getByText( saludo ) ).toBeInTheDocument(  )
    // });
    
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo  = 'Hola, Juanito'
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de mostrar el subitulo enviado por props', () => {
        
        const saludo    = 'Hola, Juanito';
        const subtitulo = 'Es un subtitulo puesto por variable';

        const wrapper   = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subtitulo }
            />
        );

        const textoParrafo = wrapper.find( 'p' ).text();

        expect( textoParrafo ).toBe( subtitulo );
    })
    
});
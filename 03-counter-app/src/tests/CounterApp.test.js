import React from 'react';
import { shallow } from 'enzyme'

import CounterApp from '../CounterApp';

describe( 'Pruebas en <CounterApp />', () => {

    test( 'Debe mostrar CounterApp correctamente', () => {
        
        const wrapper = shallow( <CounterApp /> );

        expect( wrapper ).toMatchSnapshot();
    })

    test( 'Debe mostrar el valor por defecto de 100', () => {
        
        const value = 100;

        const wrapper = shallow( <CounterApp value={ value } /> )

        const valueDefault = wrapper.find('h2').text();

        expect( valueDefault ).toBe( '100' );
    })
    
    
})
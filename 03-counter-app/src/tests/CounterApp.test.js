import React from 'react';
import { shallow } from 'enzyme'

import CounterApp from '../CounterApp';

describe( 'Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );
    })

    test( 'Debe mostrar CounterApp correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test( 'Debe mostrar el valor por defecto de 100', () => {
        
        const value = 100;
        const wrapper = shallow( <CounterApp value={ value } /> )
        const valueDefault = wrapper.find('h2').text();

        expect( valueDefault ).toBe( '100' );
    })
    
    test( 'Debe de incrementar el valor con el boton +1', () => {

        wrapper.find('button').at( 0 ).simulate( 'click' );
        const counterText = wrapper.find( 'h2' ).text();

        expect( counterText ).toBe( '1' );
    });

    test( 'Debe de disminuir el valor con el boton -1', () => {

        wrapper.find('button').at( 2 ).simulate( 'click' );
        const counterText = wrapper.find( 'h2' ).text();

        expect( counterText ).toBe( '-1' );
    });

    test( 'Debe de resetear el valor con el boton reset', () => {

        wrapper.find('button').at( 1 ).simulate( 'click' );
        const counterText = wrapper.find( 'h2' ).text();

        expect( counterText ).toBe( '0' );
    });
    
})
import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe( 'Prueba en <GridGifItem>', () => {

    const title = 'Soy un titulo';
    const url   = 'https://localhost/avatar.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )
    
    test( 'Hacer snapshot de el componente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test( 'Debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test( 'Img debe tener el atributo src y alt con el valor de los props', () => {

        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test( 'El div debe tener la clase animate__fadeInLeft', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeInLeft') ).toBe( true );

    });
})
import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe( 'Prueba en <GridGifItem>', () => {

    const title = 'Soy un titulo';
    const url   = 'https://localhost/avatar.jpg';
    
    test( 'Hacer snapshot de el componente', () => {

        const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )

        expect( wrapper ).toMatchSnapshot();
    })
})
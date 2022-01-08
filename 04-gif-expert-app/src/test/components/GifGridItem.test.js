import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe( 'Prueba en <GridGifItem>', () => {

    test( 'Hacer snapshot de el componente', () => {

        const wrapper = shallow( <GifGridItem /> )

        expect( wrapper ).toMatchSnapshot();
    })
})
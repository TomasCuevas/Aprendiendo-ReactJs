import React from 'react';
import { shallow } from "enzyme";

import { AddCategory } from '../../components/AddCategory';

describe( 'Prueba en <AddCategory />', () => {

    const setCategories = () => {};
    
    test( 'Debe mostrarse correctamente', () => {

        const wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

        expect( wrapper ).toMatchSnapshot();

    })
})
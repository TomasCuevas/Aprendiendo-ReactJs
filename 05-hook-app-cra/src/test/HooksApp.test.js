import React from 'react';
import { shallow } from "enzyme";

import { HooksApp } from '../HooksApp.js'; 

describe('Pruebas en <HookApp />', () => {
    
    test('Snapshot de <HookApp />', () => {
        const wrapper = shallow( <HooksApp /> );
        expect( wrapper ).toMatchSnapshot();
    })
})
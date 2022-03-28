import React from 'react';
import { shallow } from "enzyme";

import { MultiplesCustomHooks } from "../../../components/03-examples/MultiplesCustomHooks";
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultiplesCustomHooks />', () => {

  test('debe de mostrarse correctamente', () => {    

    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {}
    });
    
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })
    
    const wrapper = shallow(<MultiplesCustomHooks />);
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de mostrar la informacion', () => {

    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {}
    });
    
    useFetch.mockReturnValue({
      data: [{
        author: 'Anselmo',
        quote: 'Hola Mundo'
      }],
      loading: false,
      error: null
    })

    const wrapper = shallow(<MultiplesCustomHooks />);

    expect(wrapper.find('.loading__container').exists()).toBe(false);
    expect(wrapper.find('.quote').text()).toBe('Hola Mundo');
    expect(wrapper.find('.author').text()).toBe(' - Anselmo');
  });
})
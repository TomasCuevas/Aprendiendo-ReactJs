import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe( 'Prueba en el hook useFetchGifs', () => {

    test( 'Debe de retornar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    })
})
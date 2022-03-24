import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    
    const initialForm = { 
        name: 'Anselmo',
        email: 'memowin15@gmail.com'
    };

    test('debe de retornar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm)); 
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange] = result.current; 
        const target = {
            name: 'name',
            value: 'Anselmo Tomas'
        }
        
        act(() => {
            handleInputChange({ target });
        })

        const [ formValues ] = result.current;

        expect(formValues).toEqual({ ...initialForm, name: 'Anselmo Tomas' });
    });

    test('debe de restablecer el formulario con RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;
        const target = {
            name: 'name',
            value: 'Anselmo Tomas'
        }

        act(() => {
            handleInputChange({ target });
            reset();
        });

        const [formValues] = result.current;
        
        expect(formValues).toEqual(initialForm);
    });
})
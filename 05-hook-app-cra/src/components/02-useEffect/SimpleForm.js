import React, { useEffect, useState } from 'react';

import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log( 'Hey' );
    }, [] );

    useEffect( () => {
        // console.log( 'FormState cambio' );
    }, [formState] );

    useEffect( () => {
        // console.log( 'Email cambio' );
    }, [email] );

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    };
    
    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div>
                <input 
                    type='text' 
                    name='name'
                    placeholder='Ingresa el nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div>
                <input 
                    type='email' 
                    name='email'
                    placeholder='Ingresa el email'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message /> }
        </>
    );
};

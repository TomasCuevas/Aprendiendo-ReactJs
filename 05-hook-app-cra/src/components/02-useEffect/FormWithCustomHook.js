import React from 'react';

import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        console.log( formValues );
    }

    return (
        <form onSubmit={ handleFormSubmit } >
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
            <div>
                <input 
                    type="password"
                    name='password'
                    placeholder='Ingresa el password'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type='submit'>Enviar</button>
        </form>
    );
};

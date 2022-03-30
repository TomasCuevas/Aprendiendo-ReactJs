import React, { useContext } from 'react'

import { UserContext } from '../../context/UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );    
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button 
                className='btn'
                onClick={ () => setUser({
                    id: 123,
                    name: 'Prueba1',
                    email: 'prueba1@test.com'
                }) }>
                Login
            </button>
        </div>
    )
}

import React, { useContext } from 'react'

import { UserContext } from './UserContext'

export const AboutScreen = () => {
    const { user, setUser } = useContext( UserContext )
    
    const handleClick = () => {
        setUser({});
    }
    
    return (
        <div>
            <h1>AboutScreen</h1>
            <hr/>

            <pre className='pre'>
                { JSON.stringify( user, null, 4 ) }
            </pre>

            <button
                className='btn btn__secundary'
                onClick={ handleClick }>
                    Logout
            </button>
        </div>
    )
}

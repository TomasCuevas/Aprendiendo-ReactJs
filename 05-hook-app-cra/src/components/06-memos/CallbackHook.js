import React, { useCallback, useState } from 'react';

import { Notes } from './Notes';
import './effects.css';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(0);
    const [notes, setNotes] = useState([])

    const increment = () => {
        setCounter( counter+1 );
    }
    
    const addNote = useCallback( () => {
        setNotes( (t) => [...t, 'nueva nota'] );
    }, [notes] )
    
    return (
        <>
            <h1>useCallback Hook</h1>
            <hr />

            <h3>Counter: { counter }</h3>
            <button
                className='button'
                onClick={ increment }
            >
                +1
            </button>

            <Notes notes={ notes } addNote={ addNote } />
        </>
    )
}
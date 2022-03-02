import React, { useReducer } from 'react'

import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
}]

export const TodoApp = () => {
    const [todos] = useReducer(todoReducer, initialState)
    
    console.log( todos );

    return (
        <>
            <h1>ToDo App</h1>
            <hr/>

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>
            </ul>
        </>
    )
}

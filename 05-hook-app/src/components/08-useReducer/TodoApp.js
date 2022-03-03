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
            <h1>ToDo App ( {todos.length} ) </h1>
            <hr/>

            <div className='todo__container'>
                <ul className='list__container'>
                    {
                        todos.map( ( todo, index ) => (
                            <div
                                className='list__item-container'
                                key={todo.id}>
                                <li
                                    className='list__item'>
                                    <p className='list__item-text'> {index + 1}. {todo.description} </p>
                                    <button
                                        className='list__delete-item'>
                                        Borrar
                                    </button>
                                </li>
                            </div>
                        ))
                    }
                </ul>

                <div className='add__todo-container'>
                    <h4 className='add__todo-title'>Agregar ToDo</h4>
                    <hr/>

                    <form className='add__todo-form'>
                        <input 
                            placeholder='ToDo description'
                            className='add__todo-input'
                            type="text"
                            name='description'/>
                        <button className='add__todo-btn'>Agregar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

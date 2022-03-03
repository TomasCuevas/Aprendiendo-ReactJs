import React, { useEffect, useReducer } from 'react'

import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './styles.css';

const init = () => {

    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    const [{description}, handleInputChange, reset] = useForm({ description: '' });
    
    const handleSubmitForm = ( e ) => {
        e.preventDefault();

        if ( description.trim().length <= 2 ) return;
        
        const newToDo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newToDo
        }

        dispatch( action );
        reset();
    }

    const handleRemoveTodo = ( id ) => {
        const action = {
            type: 'remove',
            payload: id
        }

        dispatch( action )
    }

    const handleToggle = ( id ) => {
        const action = {
            type: 'toggle',
            payload: id
        }

        dispatch( action );
    }

    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos])

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
                                <li className='list__item'>
                                    <p 
                                        className={ (todo.done) ? 'list__item-text complete' : 'list__item-text' }
                                        onClick={ (e) => handleToggle( todo.id ) }> 
                                        {index + 1}. {todo.description} 
                                    </p>
                                    <button
                                        className='list__delete-item'
                                        onClick={ () => handleRemoveTodo( todo.id ) }>
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

                    <form 
                        autoComplete='off'
                        onSubmit={ handleSubmitForm }
                        className='add__todo-form'>
                        <input 
                            placeholder='ToDo description'
                            className='add__todo-input'
                            type="text"
                            value={ description }
                            onChange={ handleInputChange }
                            name='description'/>
                        <button 
                            type='submit'
                            className='add__todo-btn'>
                                Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

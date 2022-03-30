import React, { useEffect, useReducer } from 'react'

import { todoReducer } from './todoReducer';
import { TodoList } from './components/TodoList/TodoList';
import { AddTodo } from './components/AddTodo/AddTodo';
import './styles.css';

const init = () => JSON.parse( localStorage.getItem('todos') ) || [];

// const initOld = () => {

//     return JSON.parse( localStorage.getItem('todos') ) || [];
// }

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
       
    const handleAddTodo = ( newToDo ) => {
        const action = {
            type: 'add',
            payload: newToDo
        }

        dispatch( action );
    }

    const handleRemoveTodo = ( id ) => {
        const action = {
            type: 'remove',
            payload: id
        }

        dispatch( action )
    }

    const handleToggleTodo = ( id ) => {
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
            <h1>ToDo App ( {todos.length} )</h1>
            <hr/>

            <div className='todo__container'>
                <TodoList 
                    todos={ todos } 
                    handleRemoveTodo={ handleRemoveTodo } 
                    handleToggleTodo={ handleToggleTodo } 
                />
                <AddTodo 
                    handleAddTodo={ handleAddTodo } 
                />
            </div>
        </>
    )
}

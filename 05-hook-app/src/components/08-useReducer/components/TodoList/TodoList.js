import React from 'react'
import PropTypes from 'prop-types'

import { TodoListItem } from '../TodoListItem/TodoListItem'

export const TodoList = ({ todos, handleRemoveTodo, handleToggleTodo }) => {

    return (
        <ul className='list__container'>
            {
                todos.map( (todo, index) => (
                    <TodoListItem  
                        key={ todo.id }
                        todo={ todo } 
                        index={ index }
                        handleRemoveTodo={ handleRemoveTodo }
                        handleToggleTodo={ handleToggleTodo } />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleRemoveTodo: PropTypes.func.isRequired,
    handleToggleTodo: PropTypes.func.isRequired
}
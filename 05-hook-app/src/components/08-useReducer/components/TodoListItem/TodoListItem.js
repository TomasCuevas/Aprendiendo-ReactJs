import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, index, handleRemoveTodo, handleToggleTodo }) => {

    return (
        <div
            className='list__item-container'
            key={todo.id} >
                <li className='list__item' >
                    <p 
                        className={ (todo.done) ? 'list__item-text complete' : 'list__item-text' }
                        onClick={ (e) => handleToggleTodo( todo.id ) } 
                    > 
                            {index + 1}. {todo.description} 
                    </p>
                    <button
                        className='list__delete-item'
                        onClick={ () => handleRemoveTodo( todo.id ) } 
                    >
                            Borrar
                    </button>
                </li>
        </div>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleRemoveTodo: PropTypes.func.isRequired,
    handleToggleTodo: PropTypes.func.isRequired
}

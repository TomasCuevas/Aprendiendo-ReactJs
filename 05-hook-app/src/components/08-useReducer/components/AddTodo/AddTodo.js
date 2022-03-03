import React from 'react'
import PropTypes from 'prop-types';

import { useForm } from '../../../../hooks/useForm';

export const AddTodo = ({ handleAddTodo }) => {
    const [{description}, handleInputChange, reset] = useForm({ description: '' });

    const handleSubmitForm = ( e ) => {
        e.preventDefault();

        if ( description.trim().length <= 2 ) return;
        
        const newToDo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleAddTodo( newToDo );
        reset();
    }

    return (
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
    )
}

AddTodo.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
}
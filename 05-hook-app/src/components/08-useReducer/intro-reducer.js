const initialState = [{
    id: 1,
    todo: 'Comprar el pan',
    done: false
}]

const todoReducer = ( state = initialState, action ) => {

    if ( action?.type === 'add' ) {
        return [...state, action.payload];
    }
    
    return state;
}

let todos = todoReducer();

console.log( todos );

const newTodo = {
    id: 2,
    todo: 'Limpiar los pisos',
    done: false
}

const addToDoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer( todos, addToDoAction )


console.log( todos );
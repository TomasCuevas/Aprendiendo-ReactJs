export const todoReducer = ( state = [], action ) => {

    switch (action?.type) {

        case 'add':
            return [...state, action.payload];

        case 'toggle':
            return state.map( ( todo ) => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo 
            )
            
        // case 'toggle_old':
        //     return state.map( ( todo ) => {

        //         if ( todo.id === action.payload ) {
        //             return {
        //                 ...todo,
        //                 done: !todo.done
        //             }
        //         } else {
        //             return {
        //                 ...todo
        //             }
        //         }
        //     })

        case 'remove':
            return state.filter( ( todo ) => todo.id !== action.payload);
            
        default:
            return state;
    }       
}
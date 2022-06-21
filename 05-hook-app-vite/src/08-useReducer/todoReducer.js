export const todoReducer = ( state = [], action = {} ) => {

  switch ( action.type ) {
    case 'TODO: add todo':
      return [ ...state, action.payload ];
  
    default:
      return state;
  }
}
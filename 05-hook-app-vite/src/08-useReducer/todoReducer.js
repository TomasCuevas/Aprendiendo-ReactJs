export const todoReducer = ( state, action = {} ) => {

  switch (action?.type) {
    case 'ABC':
      throw new Error('ACTION: "ABC" === no esta implementada ');    
  
    default:
      return state;
  }
}
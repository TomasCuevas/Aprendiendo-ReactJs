import { useState } from 'react';

export const useCounter = ( initialState = 0 ) => {
  const [ counter, setCounter ] = useState(initialState);

  return {
    counter
  }
}
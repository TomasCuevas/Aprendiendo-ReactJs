import { useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [counter, dispatch] = useReducer(first, INITIAL_STATE);

  const onIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>CounterReducer: {counter}</h1>
      <button onClick={onIncrement}>+1</button>
    </>
  );
};

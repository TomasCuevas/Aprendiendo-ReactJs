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

type CounterAction = { type: 'increaseBy'; payload: { value: number } } | { type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action?.type) {
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };

    case 'reset':
      return INITIAL_STATE;

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const onReset = () => {
    dispatch({ type: 'reset' });
  };

  const onIncrement = () => {};

  return (
    <>
      <h1>CounterReducer: {counter}</h1>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
};

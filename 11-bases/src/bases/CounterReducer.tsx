import { useReducer } from 'react';

import { counterReducer } from '../reducers/counterReducer/counterReducer';
import { CounterState } from '../reducers/counterReducer/interfaces/counterInterfaces';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const onReset = () => {
    dispatch({ type: 'reset' });
  };

  const onIncreaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  return (
    <>
      <hr />
      <h1>
        CounterReducer: {counter} | Previous: {previous} | Changes: {changes}
      </h1>

      <button onClick={() => onIncreaseBy(1)}>+1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
      <button onClick={() => onIncreaseBy(10)}>+10</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
};

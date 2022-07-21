import { useState } from 'react';

export const Counter = ({ init = 0 }) => {
  const [counter, setCounter] = useState(init);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
    </>
  );
};

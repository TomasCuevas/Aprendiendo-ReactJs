import { useState } from 'react';

interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue = 10 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

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

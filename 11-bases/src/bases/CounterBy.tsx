import { useState } from 'react';

interface Props {
  initialValue?: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [counterState, setCounterState] = useState({
    counter: initialValue,
    clicks: 0,
  });

  const { counter, clicks } = counterState;

  const onIncrement = (incrementValue: number) => {
    setCounterState((prev) => ({
      counter: prev.counter + incrementValue,
      clicks: prev.clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => onIncrement(1)}>+1</button>
      <button onClick={() => onIncrement(5)}>+5</button>
    </>
  );
};

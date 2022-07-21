import { useState } from 'react';

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const onIncrement = (incrementValue: number) => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + incrementValue,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <hr />
      <h1>Counter: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => onIncrement(1)}>+1</button>
      <button onClick={() => onIncrement(5)}>+5</button>
    </>
  );
};

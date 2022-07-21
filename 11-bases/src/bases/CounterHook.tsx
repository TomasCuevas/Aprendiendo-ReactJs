import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  const { counter, elementToAnimate, onIncrement } = useCounter({
    InitValue: 10,
    MAXIMUN_COUNT: 20,
  });

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={onIncrement}>+1</button>
    </>
  );
};

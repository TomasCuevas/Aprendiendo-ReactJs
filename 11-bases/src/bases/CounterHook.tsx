import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  const { counter, counterElement, onIncrement } = useCounter({ MAXIMUN_COUNT: 10 });

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={onIncrement}>+1</button>
    </>
  );
};

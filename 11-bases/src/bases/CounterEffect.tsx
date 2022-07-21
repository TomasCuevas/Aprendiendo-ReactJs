import { useEffect, useState } from 'react';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const onIncrement = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log('%cSe llego al valor maximo', 'color: red; background-color: black');
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: {counter}</h1>

      <button onClick={onIncrement}>+1</button>
    </>
  );
};

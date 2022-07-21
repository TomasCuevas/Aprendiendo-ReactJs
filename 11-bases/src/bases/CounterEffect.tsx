import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const onIncrement = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log('%cSe llego al valor maximo', 'color: red; background-color: black');

    gsap.to('h2', { y: -10, duration: 0.5 }).then(() => {
      gsap.to('h2', { y: 10, duration: 0.2, ease: 'bounce.out' });
    });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2>{counter}</h2>

      <button onClick={onIncrement}>+1</button>
    </>
  );
};

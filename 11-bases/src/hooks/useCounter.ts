import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface Props {
  MAXIMUN_COUNT?: number;
}

export const useCounter = ({ MAXIMUN_COUNT = 10 }: Props) => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const onIncrement = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log('%cSe llego al valor maximo', 'color: red; background-color: black');

    const timeline = gsap.timeline();

    timeline
      .to(counterElement.current, { y: -10, duration: 0.2 })
      .to(counterElement.current, { y: 10, duration: 1, ease: 'bounce.out' });
  }, [counter]);

  return {
    // properties
    counter,
    counterElement,

    // methods
    onIncrement,
  };
};

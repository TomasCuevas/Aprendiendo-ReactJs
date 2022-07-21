import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';

interface Props {
  InitValue: number;
  MAXIMUN_COUNT?: number;
}

export const useCounter = ({ InitValue, MAXIMUN_COUNT = 10 }: Props) => {
  const [counter, setCounter] = useState(InitValue);
  const elementToAnimate = useRef<any>(null);
  const timeline = useRef(gsap.timeline());

  const onIncrement = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useLayoutEffect(() => {
    if (!timeline.current) return;

    timeline.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2 })
      .to(elementToAnimate.current, { y: 10, duration: 1, ease: 'bounce.out' })
      .pause();
  }, []);

  useEffect(() => {
    timeline.current.play(0);
  }, [counter]);

  return {
    // properties
    counter,
    elementToAnimate,

    // methods
    onIncrement,
  };
};

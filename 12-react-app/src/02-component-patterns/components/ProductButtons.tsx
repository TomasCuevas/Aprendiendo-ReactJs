import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import Styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
}

export const ProductButtons = ({ className }: Props) => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div className={`${Styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={Styles.buttonMinus}>
        -
      </button>
      <span className={Styles.countLabel}>{counter}</span>
      <button onClick={() => increaseBy(1)} className={Styles.buttonAdd}>
        +
      </button>
    </div>
  );
};

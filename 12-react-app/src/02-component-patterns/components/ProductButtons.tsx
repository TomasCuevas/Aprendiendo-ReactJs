import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import Styles from '../styles/styles.module.css';

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div className={Styles.buttonsContainer}>
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

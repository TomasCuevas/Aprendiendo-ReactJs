import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import Styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  styleButtons?: CSSProperties;
  styleSpan?: CSSProperties;
}

export const ProductButtons = ({ className, styleButtons, styleSpan }: Props) => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div className={`${Styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={Styles.buttonMinus} style={styleButtons}>
        -
      </button>
      <span className={Styles.countLabel} style={styleSpan}>
        {counter}
      </span>
      <button onClick={() => increaseBy(1)} className={Styles.buttonAdd} style={styleButtons}>
        +
      </button>
    </div>
  );
};

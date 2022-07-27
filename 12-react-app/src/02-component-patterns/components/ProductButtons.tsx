import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import Styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

export interface Props {
  className?: string;
  styleButtons?: CSSProperties;
  styleSpan?: CSSProperties;
}

export const ProductButtons = ({ className, styleButtons, styleSpan }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);

  return (
    <div className={`${Styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={Styles.buttonMinus} style={styleButtons}>
        -
      </button>
      <span className={Styles.countLabel} style={styleSpan}>
        {counter}
      </span>
      <button
        onClick={() => increaseBy(1)}
        className={`${Styles.buttonAdd} ${isMaxReached() && Styles.disabled}`}
        style={styleButtons}
      >
        +
      </button>
    </div>
  );
};

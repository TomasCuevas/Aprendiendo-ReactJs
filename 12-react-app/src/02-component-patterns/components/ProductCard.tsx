import Styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useState } from 'react';

export const ProductCard = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return (
    <div className={Styles.productCard}>
      {/* <img src="./coffee-mug.png" alt="Coffee Mug" className={Styles.productImg} /> */}
      <img src={noImage} alt="Coffee Mug" className={Styles.productImg} />

      <span className={Styles.productDescription}>Coffee Mug</span>
      <div className={Styles.buttonsContainer}>
        <button onClick={() => increaseBy(-1)} className={Styles.buttonMinus}>
          -
        </button>
        <span className={Styles.countLabel}>{counter}</span>
        <button onClick={() => increaseBy(1)} className={Styles.buttonAdd}>
          +
        </button>
      </div>
    </div>
  );
};

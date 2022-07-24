import { useProduct } from '../hooks/useProduct';

import Styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={Styles.productCard}>
      {product.img ? (
        <img src={product.img} alt={product.title} className={Styles.productImg} />
      ) : (
        <img src={noImage} alt="No Image" className={Styles.productImg} />
      )}

      <span className={Styles.productDescription}>{product.title}</span>
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

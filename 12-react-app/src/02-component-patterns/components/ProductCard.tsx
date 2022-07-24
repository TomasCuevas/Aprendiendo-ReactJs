import { ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';

import Styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductImage = ({ img, title }: Product) => {
  return (
    <img
      src={img ? img : noImage}
      alt={title ? title : 'Image description'}
      className={Styles.productImg}
    />
  );
};

export const ProductTitle = ({ title }: Product) => {
  return <span className={Styles.productDescription}>{title}</span>;
};

export const ProductButtons = ({ counter, increaseBy }: ProductButtonsProps) => {
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

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={Styles.productCard}>
      {children}
      <ProductButtons counter={counter} increaseBy={increaseBy} />
    </div>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

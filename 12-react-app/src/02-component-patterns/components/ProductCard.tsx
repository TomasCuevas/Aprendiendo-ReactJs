import { createContext, ReactElement, useContext } from 'react';

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

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img }: { img?: string }) => {
  const { product } = useContext(ProductContext);
  const { title } = product;
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img src={imgToShow} alt={title ? title : 'Image description'} className={Styles.productImg} />
  );
};

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return <span className={Styles.productDescription}>{title ? title : product.title}</span>;
};

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

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={Styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

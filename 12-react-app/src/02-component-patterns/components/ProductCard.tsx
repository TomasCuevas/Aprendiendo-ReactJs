import { createContext, CSSProperties, ReactElement } from 'react';

import { ProductContextProps, Product, onChangeArgs } from '../interfaces/ProductInterfaces';

import { useProduct } from '../hooks/useProduct';

import Styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  styles?: CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ children, product, className, styles, onChange, value }: Props) => {
  const { counter, increaseBy } = useProduct({ product, onChange, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${Styles.productCard} ${className}`} style={styles}>
        {children}
      </div>
    </Provider>
  );
};

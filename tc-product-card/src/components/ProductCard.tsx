import React, { createContext, CSSProperties } from 'react';

import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductContextProps,
} from '../interfaces/ProductInterfaces';

import { useProduct } from '../hooks/useProduct';

import Styles from '../styles/styles.module.css';
import { ProductCardHandlers } from '../interfaces/ProductInterfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  styles?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  styles,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    product,
    onChange,
    initialValues,
  });

  return (
    <Provider
      value={{
        // properties
        counter,
        maxCount,
        product,

        // methods
        increaseBy,
      }}
    >
      <div className={`${Styles.productCard} ${className}`} style={styles}>
        {children({
          // properties
          count: counter,
          isMaxCountReached,
          maxCount,
          product,

          // methods
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

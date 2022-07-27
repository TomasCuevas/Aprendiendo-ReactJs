import { createContext, CSSProperties, ReactElement } from 'react';

import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductContextProps,
} from '../interfaces/ProductInterfaces';

import { useProduct } from '../hooks/useProduct';

import Styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (message: string) => JSX.Element;
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
  const { counter, increaseBy } = useProduct({ product, onChange, initialValues });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${Styles.productCard} ${className}`} style={styles}>
        {children('Hello World!')}
      </div>
    </Provider>
  );
};

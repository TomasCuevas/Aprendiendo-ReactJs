import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import Styles from '../styles/styles.module.css';

export interface Props {
  activeClassName?: string;
  className?: string;
  title?: string;
}

export const ProductTitle = ({ title, className, activeClassName }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${Styles.productDescription} ${className} ${activeClassName}`}>
      {title ? title : product.title}
    </span>
  );
};

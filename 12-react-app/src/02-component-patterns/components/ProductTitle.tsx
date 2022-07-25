import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import Styles from '../styles/styles.module.css';

interface Props {
  className?: string;
  title?: string;
}

export const ProductTitle = ({ title, className }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${Styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};

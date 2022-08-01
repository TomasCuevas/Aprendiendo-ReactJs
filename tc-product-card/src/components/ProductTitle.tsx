import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import Styles from '../styles/styles.module.css';

export interface Props {
  activeClassName?: string;
  className?: string;
  title?: string;
  styles?: CSSProperties;
}

export const ProductTitle = ({ title, className, activeClassName, styles }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${Styles.productDescription} ${className} ${activeClassName}`} style={styles}>
      {title ? title : product.title}
    </span>
  );
};

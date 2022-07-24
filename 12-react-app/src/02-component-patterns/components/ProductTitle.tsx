import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import Styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return <span className={Styles.productDescription}>{title ? title : product.title}</span>;
};

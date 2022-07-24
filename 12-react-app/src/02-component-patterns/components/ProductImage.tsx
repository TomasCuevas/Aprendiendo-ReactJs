import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';

import Styles from '../styles/styles.module.css';

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

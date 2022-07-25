import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/ProductInterfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons, ProductImage, ProductTitle };

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
});

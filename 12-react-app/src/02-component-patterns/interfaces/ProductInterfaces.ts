import { ReactElement } from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Buttons: ({ className }: { className?: string }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
}

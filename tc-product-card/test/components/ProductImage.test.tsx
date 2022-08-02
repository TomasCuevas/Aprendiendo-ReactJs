import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductImage } from '../../src/components/ProductImage';

import { product1 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';

describe('Pruebas en <ProductImage />', () => {
  test('Debe mostrar el url de la imagen personalizado', () => {
    render(<ProductImage img="http://cualquierurl.com" />);

    expect(screen.getByRole('img').getAttribute('src')).toBe(
      'http://cualquierurl.com'
    );
  });

  test('Debe mostrar el url de la imagen del product', () => {
    render(
      <ProductCard product={product1}>{() => <ProductImage />}</ProductCard>
    );

    expect(screen.getByRole('img').getAttribute('src')).toBe(product1.img);
  });
});

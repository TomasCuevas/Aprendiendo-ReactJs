import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProductTitle } from '../../src/components/ProductTitle';
import { ProductCard } from '../../src/components/ProductCard';

import { product1 } from '../data/products';

describe('Pruebas en <ProductTitle />', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
    render(<ProductTitle title="Custom Product" />);

    expect(screen.getByLabelText('span-test').innerHTML).toBe('Custom Product');
  });

  test('Debe de mostrar el componente con el nombre del producto', () => {
    render(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(screen.getByLabelText('span-test').innerHTML).toBe(
      'Coffee Mug - Con imagen'
    );
  });
});

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProductCard } from '../../src/components/index';

import { product1 } from '../data/products';

describe('Pruebas en <ProductCard />', () => {
  test('Debe de mostrar el componente correctamente', () => {
    render(
      <ProductCard product={product1}>{() => <h1>Hola Mundo</h1>}</ProductCard>
    );

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(
      'Hola Mundo'
    );
  });

  test('Debe de incrementar el valor de count', () => {
    render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span aria-label="span-test">{count}</span>
            <button onClick={() => increaseBy(1)}>Button</button>
          </>
        )}
      </ProductCard>
    );

    expect(screen.getByLabelText('span-test').innerHTML).toBe('0');

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByLabelText('span-test').innerHTML).toBe('1');
  });
});

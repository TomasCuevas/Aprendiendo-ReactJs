import { useEffect, useState } from 'react';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { onChangeArgs, Product } from '../interfaces/ProductInterfaces';
import '../styles/customStyles.css';

const product1 = {
  id: '1',
  img: './coffee-mug.png',
  title: 'Coffee Mug - Card',
};

const product2 = {
  id: '2',
  img: './coffee-mug2.png',
  title: 'Coffee Mug - Card',
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return { ...rest };

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return { ...rest };
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            className="bg__dark"
            key={product.id}
            onChange={onProductCountChange}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image className="custom__image" />
            <ProductCard.Title className="text__white text__bold" />
            <ProductCard.Buttons className="custom__buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping__card">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            className="bg__dark"
            key={key}
            onChange={onProductCountChange}
            product={product}
            styles={{ width: '120px' }}
            value={product.count}
          >
            <ProductCard.Image className="custom__image" />
            <ProductCard.Buttons className="custom__buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

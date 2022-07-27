import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/products';
import '../styles/customStyles.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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

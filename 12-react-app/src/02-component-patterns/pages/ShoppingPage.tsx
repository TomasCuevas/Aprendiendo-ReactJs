import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

import { products } from '../data/products';
import '../styles/customStyles.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard
          className="bg__dark"
          key={product.id}
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({
            // properties
            count,
            increaseBy,
            product,
            maxCount,

            // methods
            isMaxCountReached,
            reset,
          }) => (
            <>
              <ProductCard.Image className="custom__image" />
              <ProductCard.Title className="text__white text__bold" />
              <ProductCard.Buttons className="custom__buttons" />
              <button onClick={reset}>Reset</button>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

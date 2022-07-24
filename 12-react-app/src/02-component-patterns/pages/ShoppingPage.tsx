import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductImage {...product} />
          <ProductTitle {...product} />
          {/* <ProductButtons {...product} /> */}
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image {...product} />
          <ProductCard.Title {...product} />
          {/* <ProductButtons {...product} /> */}
        </ProductCard>
      </div>
    </div>
  );
};

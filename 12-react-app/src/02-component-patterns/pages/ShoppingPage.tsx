import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/ProductInterfaces';
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

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} className="bg__dark">
            <ProductCard.Image className="custom__image" />
            <ProductCard.Title className="text__white text__bold" />
            <ProductCard.Buttons className="custom__buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping__card">
        <ProductCard product={product2} className="bg__dark" styles={{ width: '120px' }}>
          <ProductCard.Image className="custom__image" />
          <ProductCard.Buttons className="custom__buttons" />
        </ProductCard>
        <ProductCard product={product1} className="bg__dark" styles={{ width: '120px' }}>
          <ProductCard.Image className="custom__image" />
          <ProductCard.Buttons className="custom__buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

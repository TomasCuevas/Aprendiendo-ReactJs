import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/customStyles.css';

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
        <ProductCard className="bg__dark" product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/customStyles.css';

const product = {
  id: '1',
  img: './coffee-mug.png',
  title: 'Coffee Mug - Card',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard className="bg__dark" product={product}>
          <ProductImage className="custom__image" />
          <ProductTitle className="text__white text__bold" />
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

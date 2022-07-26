import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/customStyles.css';

const product = {
  id: '1',
  img: './coffee-mug.png',
  title: 'Coffee Mug - Card',
};

const product2 = {
  id: '2',
  img: './coffee-mug2.png',
  title: 'Coffee Mug - Card',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product} className="bg__dark">
          <ProductImage className="custom__image" />
          <ProductTitle className="text__white text__bold" activeClassName="active" />
          <ProductButtons className="custom__buttons" />
        </ProductCard>

        <ProductCard product={product2} className="bg__dark">
          <ProductCard.Image className="custom__image" />
          <ProductCard.Title className="text__white text__bold" />
          <ProductCard.Buttons className="custom__buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

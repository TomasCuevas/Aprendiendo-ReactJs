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
        <ProductCard product={product} className="bg__dark">
          <ProductImage className="custom__image" />
          <ProductTitle className="text__white text__bold" activeClassName="active" />
          <ProductButtons className="custom__buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg__dark">
          <ProductCard.Image className="custom__image" />
          <ProductCard.Title className="text__white text__bold" />
          <ProductCard.Buttons className="custom__buttons" />
        </ProductCard>

        <ProductCard product={product} styles={{ backgroundColor: 'rgb(56, 56, 56)' }}>
          <ProductCard.Image
            styles={{ borderRadius: '20px', padding: '10px', width: 'calc(100% - 20px)' }}
          />
          <ProductCard.Title styles={{ color: 'white', fontWeight: '700' }} />
          <ProductCard.Buttons
            styleButtons={{
              backgroundColor: 'rgb(56, 56, 56)',
              borderColor: 'white',
              color: 'white',
            }}
            styleSpan={{
              backgroundColor: 'rgb(56, 56, 56)',
              borderColor: 'white',
              color: 'white',
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

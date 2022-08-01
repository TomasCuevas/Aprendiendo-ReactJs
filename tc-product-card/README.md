# TC-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Tomas Cuevas

## Ejemplo

```
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
```

```
<ProductCard
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
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```

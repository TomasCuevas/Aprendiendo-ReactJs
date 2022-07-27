import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/ProductInterfaces';

interface Props {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, onChange, value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    // properties
    counter,

    // methods
    increaseBy,
  };
};

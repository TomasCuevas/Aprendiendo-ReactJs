import { useEffect, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/ProductInterfaces';

interface Props {
  initialValues?: InitialValues;
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, onChange, initialValues }: Props) => {
  const [counter, setCounter] = useState(initialValues?.count || 0);

  const increaseBy = (value: number) => {
    const alwaysMaxZero = Math.max(counter + value, 0);
    const newValue = initialValues?.maxCount
      ? Math.min(alwaysMaxZero, initialValues?.maxCount)
      : alwaysMaxZero;

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(initialValues?.count || 0);
  }, [initialValues?.count]);

  return {
    // properties
    counter,

    // methods
    increaseBy,
  };
};

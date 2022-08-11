import { useState } from 'react';

export const useForm = <T>(initialData: T) => {
  const [formData, setFormData] = useState(initialData);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return {
    // properties
    ...formData,
    formData,

    // methods
    onChange,
  };
};

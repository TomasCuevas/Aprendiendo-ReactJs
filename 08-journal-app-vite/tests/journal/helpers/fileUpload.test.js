/* eslint-disable no-undef */
import { fileUpload } from '../../../src/journal/helpers/fileUpload';

describe('Pruebas en fileUpload', () => {
  jest.setTimeout(15000);

  test('debe de subir el archivo correctamente a cloudinary', async () => {
    const imageUrl =
      'https://cdn.dribbble.com/users/648922/screenshots/15342382/media/65caee64550ce68c8c5c1cb3265dd98a.png?compress=1&resize=400x300';
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg');

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
  });
});

/* eslint-disable no-undef */
import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../../src/journal/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dn3kl3egc',
  api_key: '831726713172783',
  api_secret: 'sCIrymZykTJmhOsmjbwp5Y4e2y4',
  secure: true,
});

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

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');

    await cloudinary.api.delete_resources([`journal-app/${imageId}`]);
  });

  test('debe de retornar null', async () => {
    const file = new File([], 'image.jpg');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});

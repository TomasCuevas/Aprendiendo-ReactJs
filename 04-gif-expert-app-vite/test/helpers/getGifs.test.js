import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs.js', () => {

  test('Debe de retornar un array de gifs', async () => {
    const gifs = await getGifs('One Punch');
    expect( gifs.length ).toBeGreaterThan( 0 );
    expect( gifs[0] ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });

})
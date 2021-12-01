import { getImagenAsync } from "../../base/11-async-await"

describe( 'Pruebas en el archivo 11-async-await.js', () => {

    test( 'getImageAsync debe retornar un url', async() => {

        const url = await getImagenAsync();

        expect( url.includes( 'https://' ) ).toBe( true );
    })
})
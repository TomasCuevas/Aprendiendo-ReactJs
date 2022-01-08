import { getFetchGifs } from '../../helpers/getFetchGifs';

describe( 'Pruebas en el archivo getFetchGifs', () => {

    test( 'Debe retornar 10 elementos', async() => {

        const gifs = await getFetchGifs('Dragon Ball');

        expect( gifs.length ).toBe( 10 );

    });

    test( 'No debe retornar nada', async() => {

        const gifs = await getFetchGifs('');

        expect( gifs.length ).toBe( 0 );

    });
})
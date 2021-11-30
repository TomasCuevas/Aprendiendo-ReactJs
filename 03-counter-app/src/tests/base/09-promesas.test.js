import { getHeroeByIdAsync } from '../../base/09-promesas';

describe( 'Pruebas en el archivo 09-promesas.js', () => {

    test( 'getHeroesByIdAsync debe retornar un heroe de forma asincrona', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( typeof heroe ).toBe( 'object' );
                done();
            })
    });

    test( 'getHeroesByIdAsync debe retornar un error si el heroe por ID no existe', ( done ) => {

        const id = 6;
        getHeroeByIdAsync( id )
            .catch( err => {
                
                expect( err ).toBe( 'No se encontro un hereo con tal ID' );
                done();
            })
    })
})
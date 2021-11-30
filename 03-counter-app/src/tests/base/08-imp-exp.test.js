import { getHeroeById, getHeroeByOwner } from '../../base/08-imp-exp';


describe( 'Pruebas en el archivo 08-imp-exp.js', () => {

    test( 'getHeroeById debe de retornar un hereo por ID', () => {

        const id = 2;
        const heroe = getHeroeById( id );

        expect( typeof heroe ).toBe( 'object' );
    });

    test( 'getHeroeById debe de retornar undefined si hereo no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    });
    
    test( 'getHeroeByOwner debe de retornar un arreglo con los hereos de DC', () => {

        const owner = 'DC';
        const heroes = getHeroeByOwner( owner );

        const heroesData = heroes.filter( ( h ) => h.owner === owner );

        expect( heroes ).toEqual( heroesData );
        
    })

    test( 'getHeroeByOwner debe de retornar un arreglo con los hereos de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroeByOwner( owner );

        expect( heroes.length ).toBe( 2 );
    })
});
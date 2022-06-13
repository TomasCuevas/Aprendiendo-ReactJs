import { getSaludo } from "../../base/02-template-string";

describe( 'pruebas en archivo 02-template-string.js', () => {

    test( 'getSaludo debe de retornar (Hola, Anselmo!)', () => {

        const nombre = 'Anselmo';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( `Hola, ${ nombre }!` );
    })

    test( 'getSaludo debe de retornar (Hola, Carlos!) si no hay argumento nombre', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola, Carlos!' );
    });
});
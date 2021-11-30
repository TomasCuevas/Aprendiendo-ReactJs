import { getUser, getUserActive } from '../../base/05-funciones';

describe( 'Pruebas en el archivo 05-funciones.js', () => {

    test( 'getUser debe de retornar un objecto', () => {

        const userTest = {
            id: '123abc',
            username: 'Pepito123'
        };
        
        const user = getUser();

        expect( user ).toEqual( userTest );
    });

    test( 'getUserActive debe de retornar un objeto', () => {
        
        const name = 'Albertito';
        
        const userTest = {
            id: '123ABC',
            username: name
        }

        const user = getUserActive( name );

        expect( user ).toEqual( userTest );
    });
})
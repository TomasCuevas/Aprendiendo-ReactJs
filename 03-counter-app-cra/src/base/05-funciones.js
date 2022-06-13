// function saludar( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

// saludar = 30;

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

// console.log( saludar( 'Goku' ) );
// console.log( saludar2( 'Vegeta' ) );
// console.log( saludar3( 'Krilin' ) );
// console.log( saludar4() );

export const getUser = () => ({
    id: '123abc',
    username: 'Pepito123'
})

// console.log( getUser() );

export const getUserActive = ( nombre ) => ({
    id: '123ABC',
    username: nombre
})

const user = getUserActive('Alberto');

// console.log( user );
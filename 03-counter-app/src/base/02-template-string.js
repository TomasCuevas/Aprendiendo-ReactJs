const nombre   = 'Anselmo';
const apellido = 'Cuevas'

const viejaForma = nombre + ' ' + apellido;
const nuevaForma = `${ nombre } ${ apellido }`;

// console.log( viejaForma );
// console.log( nuevaForma );

export function getSaludo( nombre = 'Carlos' ) {
    return `Hola, ${ nombre }!`;
}

// console.log( `Esto es un saludo: ${ getSaludo( nombre ) }` );
const nombre   = 'Anselmo';
const apellido = 'Cuevas'

const viejaForma = nombre + ' ' + apellido;
const nuevaForma = `${ nombre } ${ apellido }`;

console.log( viejaForma );
console.log( nuevaForma );

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Esto es un saludo: ${ getSaludo( nombre ) }` );
const persona = {
    nombre: 'Pepito',
    apellido: 'Perez',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 13125436,
        lat: 25.123125,
        lng: 13.25234234,
    }
};

// console.table( persona );
console.log( persona );

const persona2 = { ...persona };
persona2.nombre = 'Alberto';

console.log( persona );
console.log( persona2 );
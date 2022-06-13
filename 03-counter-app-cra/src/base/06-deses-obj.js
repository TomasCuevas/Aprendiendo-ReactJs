const persona = {
    nombre: 'Pepito',
    edad: 45,
    clave: 'Pepito123',
    rango: 'Soldado'
};

const { nombre:nombre_persona, edad, clave } = persona;

console.log( nombre_persona );
console.log( edad );
console.log( clave );

const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 21.463634,
            lng: 12.63434
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );

console.log( nombreClave, anios );
console.log( lat, lng );
import heroes, { owners } from '../data/heroes';

if ( owners ) // no sirve de nada

export const getHeroeById = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id );
}

// console.log( getHeroeById( 2 ) );

const getHeroeByOwner = ( owner ) => {
    return heroes.filter( ( heroe ) => heroe.owner === owner );
}

// console.log( getHeroeByOwner( 'Marvel' ) );
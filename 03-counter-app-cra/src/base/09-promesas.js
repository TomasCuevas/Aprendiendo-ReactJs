import { getHeroeById } from './08-imp-exp'

// const promesa = new Promise( ( resolve, reject ) => {
//     setTimeout( () => {
        
//         const heroe = getHeroeById( 3 ); 
//         if ( heroe ) {
//             resolve( heroe );
//         } else {
//             reject( 'No se encontro un hereo con tal ID' );
//         }

//     }, 3000);
// });

// promesa.then( ( res ) => {
//     console.log( res );
// })
// .catch( (err) => {
//     console.log( err );
// })

export const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            
            const heroe = getHeroeById( id ); 

            if ( heroe ) {
                resolve( heroe );
            } else {
                reject( 'No se encontro un hereo con tal ID' );
            }
    
        }, 1500);
    });
}
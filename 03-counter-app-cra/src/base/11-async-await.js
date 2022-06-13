// const getImagenPromesa = () => {
//     return new Promise( (resolve, reject) => {
//         resolve( 'https:/dawdawdawd2dasdad.com' )
//     })
// }

// getImagenPromesa()
//     .then( console.log )

export const getImagenAsync = async() => {
    
    try {
        const apiKey = 'qV5k5fNfElMQkPpD5DWCX7fVs5zPoHYe';

        const res = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` );
        const { data } = await res.json();
        const { url } = data.images.original;

        // const $body = document.getElementById( 'root' );
        // const $img = document.createElement( 'img' );

        // $img.src = url;
        // $body.appendChild( $img );

        return url;

    } catch (err) {
        // manejo del error
        console.error( err );
        return 'No existe';
    }
}

// getImagenAsync();
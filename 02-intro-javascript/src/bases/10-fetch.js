const apiKey = 'qV5k5fNfElMQkPpD5DWCX7fVs5zPoHYe';

const peticion = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` );

peticion
    .then( (res) => res.json() )
    .then( ({data}) => {
        const { url } = data.images.original;
        
        const $body = document.getElementById( 'root' );
        const $img = document.createElement( 'img' );
        
        $img.src = url;

        $body.appendChild( $img );

    })
    .catch( console.warn )
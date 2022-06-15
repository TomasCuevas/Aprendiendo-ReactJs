export const getImagen = async() => {

    try {

        const apiKey = 'ENn8GXJ9NZwet2ZprGgi4c67WUJwK6MJ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = await data.images.original;
        
        return url;

    } catch (error) {
        // manejo del error
        return 'No se encontro la imagen.';
    }   
}
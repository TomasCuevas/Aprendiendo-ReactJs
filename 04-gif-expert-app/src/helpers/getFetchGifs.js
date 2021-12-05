export const getFetchGifs = async( category ) => {

	const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=qV5k5fNfElMQkPpD5DWCX7fVs5zPoHYe`

	const res = await fetch( url );
	const { data } = await res.json();

	const gifs = data.map( ( img ) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url
		}
	})
	
	return gifs;
}
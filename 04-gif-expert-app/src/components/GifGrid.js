import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {
	
	const [count, setCount] = useState(0);
	
	useEffect( () => {
		getGif();
	}, []);

	const getGif = async() => {

		const url = 'http://api.giphy.com/v1/gifs/search?q=rick%20and%20morty&limit=10&api_key=qV5k5fNfElMQkPpD5DWCX7fVs5zPoHYe'

		const res = await fetch( url );
		const { data } = await res.json();

		const gifs = data.map( ( img ) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images.downsized_medium.url
			}
		})
		
		console.log( gifs );
	}

	return (
		<div>
			<h3>{ category }</h3>
			<h3>{ count }</h3>
			<button onClick={ () => setCount( count + 1 ) }>Boton</button>
		</div>
	)
}

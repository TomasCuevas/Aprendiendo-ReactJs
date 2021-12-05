import React from 'react'

export const GifGrid = ({ category }) => {
	
	const getGif = async() => {

		const url = 'http://api.giphy.com/v1/gifs/search?q=rick%20and%20morty&limit=10&api_key=qV5k5fNfElMQkPpD5DWCX7fVs5zPoHYe'

		const res = await fetch( url )
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

	getGif();

	return (
		<div>
			<h3>{ category }</h3>
		</div>
	)
}

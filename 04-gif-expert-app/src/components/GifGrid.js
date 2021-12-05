import React, { useEffect, useState } from 'react'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	
	const [images, setImages] = useState([]);
	
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
		setImages( gifs )
	}

	return (
		<div>
			<h3>{ category }</h3>
			{
				images.map( ( img ) => (
					<GifGridItem 
						key={ img.id } 
						{ ...img }	
					/>
				))
			}
		</div>
	)
}

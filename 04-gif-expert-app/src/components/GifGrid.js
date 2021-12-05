import React, { useEffect, useState } from 'react'

import { GifGridItem } from './GifGridItem';
import { getGif } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
	
	const [images, setImages] = useState([]);
	
	useEffect( () => {
		getGif( category )
			.then( imgs => setImages( imgs ))
	}, [ category ]);

	return (
		<>
			<h3>{ category }</h3>
			<div className="card__container" >
				{
					images.map( ( img ) => (
						<GifGridItem 
							key={ img.id } 
							{ ...img }	
						/>
					))
				}
			</div>
		</>
	)
}

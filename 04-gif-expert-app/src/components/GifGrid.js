import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

// import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
	
	// const [images, setImages] = useState([]);
	
	// useEffect( () => {
	// 	getGif( category )
	// 		.then( imgs => setImages( imgs ))
	// }, [ category ]);

	const { loading } = useFetchGifs()

	console.log( loading );

	return (
		<>
			<h3>{ category }</h3>
			{ (loading) ? 'cargando...' : 'data cargada' }

			{/* <div className="card__container" >
				{
					images.map( ( img ) => (
						<GifGridItem 
							key={ img.id } 
							{ ...img }	
						/>
					))
				}
			</div> */}
		</>
	)
}

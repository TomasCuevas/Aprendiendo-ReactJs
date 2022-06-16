import { useState, useEffect } from 'react';
import { getGifs } from '../../helpers/getGifs';
import { GifCard } from '../GifCard/GifCard';

export const GifGrid = ({ category }) => {
  const [ gifs, setGifs ] = useState([]);

  const getCurrentGifs = async() => {
    const gifs = await getGifs(category);
    setGifs(gifs);
  }
  
  useEffect(() => {
    getCurrentGifs();
  }, [])
  
  return (
    <section>
      <h3>{ category }</h3>

      <div className='card-grid'>
        {
          gifs.map( ({ id, ...gif }) => (
            <GifCard 
              key={id} 
              { ...gif }
            />
          ))
        }
      </div>

    </section>
  )
}
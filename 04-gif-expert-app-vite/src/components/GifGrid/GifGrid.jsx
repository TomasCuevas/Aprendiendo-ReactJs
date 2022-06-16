import { useState, useEffect } from 'react';
import { getGifs } from '../../helpers/getGifs';

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

      <ol>
        {
          gifs.map( ({ id, title, url }) => (
            <li key={id}>{ title }</li>
          ))
        }
      </ol>

    </section>
  )
}
import { useState, useEffect } from 'react';
import { getGifs } from '../../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    getGifs(category);
  }, [])
  
  return (
    <>
      <h3>{ category }</h3>

      <h4>{ count }</h4>
      <button onClick={() => setCount(count + 1)}>+1</button>

    </>
  )
}
import { useEffect, useState } from 'react';

/**
 * @helpers
 */
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  const [ gifs, setGifs ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getCurrentGifs = async() => {
    const gifs = await getGifs(category);
    setGifs(gifs);
    setIsLoading(false);
  }
  
  useEffect(() => {
    getCurrentGifs();
  }, [])

  return { gifs, isLoading };
}
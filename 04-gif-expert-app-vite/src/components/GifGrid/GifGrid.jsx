/**
 * @hooks
 */
import { useFetchGifs } from '../../hooks/useFetchGifs';

/**
 * @components
 */
import { GifCard } from '../GifCard/GifCard';

export const GifGrid = ({ category }) => {
  const [gifs, isLoading] = useFetchGifs(category);
  
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
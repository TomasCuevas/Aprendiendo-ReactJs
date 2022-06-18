import PropTypes from 'prop-types';

/**
 * @hooks
 */
import { useFetchGifs } from '../../hooks/useFetchGifs';

/**
 * @components
 */
import { GifCard } from '../';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  
  return (
    <section>
      <h3>{ category }</h3>
      { isLoading && <h4>Loading...</h4> }

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
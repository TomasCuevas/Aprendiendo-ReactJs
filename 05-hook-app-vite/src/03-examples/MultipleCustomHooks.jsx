import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote, QuoteButtoms } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      { (isLoading) && <LoadingQuote />}

      { (!isLoading) && (
        <Quote 
          quote={quote} 
          author={author} 
        />
      )}

      <button 
        className="btn btn-primary"
        onClick={() => decrement()}
        disabled={counter === 1 && true || isLoading}
      >
        Previous Quote
      </button>
      <button 
        className="btn btn-primary"
        disabled={ isLoading }
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  )
}
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      { (isLoading) && (<div className="alert alert-info text-center">Loading...</div>)}

      { (!isLoading) && (
        <>
          <blockquote className="blockquote text-end">
            <p className="mb-10">
              { quote }
            </p>
            <footer className="blockquote-footer">
              { author }
            </footer>
          </blockquote>
          
          <button 
            className="btn btn-primary"
            onClick={() => decrement()}
            disabled={counter === 1 && true}
          >
            Previous Quote
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => increment()}
          >
            Next Quote
          </button>
        </>
      )}
    </>
  )
}
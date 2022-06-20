export const QuoteButtoms = ({ counter, decrement, increment }) => {

  return (
    <>
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
  )
}
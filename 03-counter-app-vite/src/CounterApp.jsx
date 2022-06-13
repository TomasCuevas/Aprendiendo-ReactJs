import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    // setState(state + 1);
    setCounter((s) => s + 1);
  }
  
  return (
    <>
      <h1>Counter App</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
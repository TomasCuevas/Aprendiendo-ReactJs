import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

    // hooks
    // hooks
    
    const [ counter, setCounter ] = useState( value );
    
    // event handlers
    // event handlers
    
    const addValue = () => {
        setCounter( counter + 1 );
        // setCounter( ( c ) => c + 1 );
    }

    const subValue = () => {
        setCounter( counter - 1 );
    }

    const resetValue = () => {
        setCounter( value );
    }
    
    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            <button onClick={ addValue } > +1 </button>
            <button onClick={ resetValue } > Reset </button>
            <button onClick={ subValue } > -1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;
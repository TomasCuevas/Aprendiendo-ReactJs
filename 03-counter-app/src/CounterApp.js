import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

    // event handlers
    const addValue = ( e ) => {
        console.log( e );
    }
    
    return (
        <>
            <h1> CounterApp </h1>
            <h2> { value } </h2>
            <button onClick={ addValue } > +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;
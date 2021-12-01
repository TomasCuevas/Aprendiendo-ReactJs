import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';

import './index.css'

const $divRoot = document.getElementById( 'root' );

ReactDOM.render( <PrimeraApp saludo='Hola, Juanito' />, $divRoot  );
{/* // ReactDOM.render( <CounterApp value={ 0 } />, $divRoot ); */}
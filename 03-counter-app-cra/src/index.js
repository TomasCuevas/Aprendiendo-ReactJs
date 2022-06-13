import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';

import './index.css'

const $divRoot = document.getElementById( 'root' );

ReactDOM.render( <CounterApp value={ 0 } />, $divRoot );
// ReactDOM.render( <PrimeraApp saludo='Hola, Juanito' />, $divRoot  );
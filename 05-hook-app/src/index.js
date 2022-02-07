import React from 'react';
import ReactDOM from 'react-dom';

import { CounterApp } from './components/01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
import './index.css';

ReactDOM.render(
    <CounterApp />,
    document.getElementById('root')
);
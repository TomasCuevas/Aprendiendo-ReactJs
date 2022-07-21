import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'
import { Counter } from './bases/Counter';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<Counter init={15} />);

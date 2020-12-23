import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import './assets/fonts/fonts.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/jquery/dist/jquery.min'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


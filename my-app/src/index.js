import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppBootstrap from './App_Bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/

ReactDOM.render(
  <AppBootstrap />,
  document.getElementById('root')
);

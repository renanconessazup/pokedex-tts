import React from 'react';
import ReactDOM from 'react-dom';
import './styles/root.scss';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <h1 className="app--title">Pokemon Find</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import { HashRouter,BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename='/'>
    <App />
  </HashRouter>
);


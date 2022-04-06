import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    
  </BrowserRouter>,
);
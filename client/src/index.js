"use strict";
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css'

const mainEl = document.querySelector('main')
const root = ReactDOM.createRoot(mainEl)

root.render(<Provider store={store}>
  <App /> 
</Provider>)
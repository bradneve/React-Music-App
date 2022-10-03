import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import App from './App'
import {default as reducer} from './reducers/reducer'


const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />

  </Provider>
  </BrowserRouter>
);



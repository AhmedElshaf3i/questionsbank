import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
  </Provider>,
  </BrowserRouter>,
  document.getElementById('root')
);


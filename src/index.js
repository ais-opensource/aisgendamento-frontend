import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import  mainStore from './stores/store'
import  App  from './App';
import './index.css';


ReactDOM.render(
  <Provider store={mainStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

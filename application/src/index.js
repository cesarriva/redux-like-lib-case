import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import rootReducer from './reducers';
import middleware from './middleware';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './Reducers';

const store = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={store(rootReducer)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

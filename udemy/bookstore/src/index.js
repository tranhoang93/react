import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import championsReducer from './store/reduce/championsReducer';
import searchReducer from './store/reduce/searchReducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import tierlistReducer from './store/reduce/tierlistReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  search: searchReducer,
  champions: championsReducer
});

const store = createStore(rootReducer);


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

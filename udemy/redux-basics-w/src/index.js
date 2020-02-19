import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reducer from './store/reducer';
import * as serviceWorker from './serviceWorker';

// const rootReducer = combineReducers({
//   persons: reducer
// });
// const store = createStore(rootReducer);

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();

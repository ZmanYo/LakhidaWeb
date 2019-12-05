import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'

//redux store setup dependencies 
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/Reducers';
import logger from 'redux-logger';

//redux dev tool 
import { composeWithDevTools } from 'redux-devtools-extension';

//create store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));



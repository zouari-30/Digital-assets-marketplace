import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import {getUsers} from '../src/Actions/users.actions'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './Reducers' ;
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const store = configureStore ({
   reducer : rootReducer ,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
}) ;
store.dispatch(getUsers())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {logger} from "redux-logger"
import {appReducer} from "./reducers/index"
import thunk from "redux-thunk"


//Create the Store
const store = createStore(appReducer, applyMiddleware(logger, thunk));

//Provider the store
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

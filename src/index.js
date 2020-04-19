import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';
import './components/Button/Button.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import App from "./components/App";
import Login from "./login";
import Register from "./register";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Register />
      <Login />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { store } from './helpers';
import { App } from './App/App';

import './App.css';
import './components/Button/Button.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider >
  </CookiesProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();

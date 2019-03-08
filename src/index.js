import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import '../src/statics/css/index.css';
import Router from './router.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  < HashRouter>
      <Router />
  </HashRouter>,
 document.getElementById('root'));
serviceWorker.unregister();

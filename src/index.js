import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';
import App from './components/App';
import history from './router/history';

import HomePage from './components/pages/HomePage';
import CounterPage from './components/pages/CounterPage';
import BotPage from './components/pages/BotPage';

const store = configureStore();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
	        <Route path="bot" component={BotPage} />
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import App from './App';
import Home from '@containers/Home';

export default (
  <Router>
    <App>
      <div
        className="position-relative bg-white"
        style={{ minHeight: 'calc(100vh - 200px)', maxWidth: '100vw' }}
      >
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </App>
  </Router>
);

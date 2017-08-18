import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from './loadModule'

import './index.css';
import App from './App';

const Index = () => <div>Index</div>

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path='/:path' render={({ match }) => (
          <Loadable foo='bar' name={match.params.path} />
        )} />

        <Route path='/' component={Index} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);

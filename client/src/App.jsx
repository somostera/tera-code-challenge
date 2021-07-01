import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

// Browser history
const browserHistory = createBrowserHistory();

const App = () => (
    <Router history={browserHistory}>
      <Routes />
    </Router>
);

export default App;

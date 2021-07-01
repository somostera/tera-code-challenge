import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BookStore from './views/BookStore';
import NewBook from './views/BookStore/new-book';

const PrivateRoute = ({ component: Component, path, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute component={BookStore} exact path="/" />
      <PrivateRoute component={NewBook} exact path="/new-book" />
    </Switch>
  </BrowserRouter>
);

export default App;

import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/details/:nameId' exact component={Details} />
      </Switch>
    </BrowserRouter>
  )
}
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Shelf from './pages/Shelf'
import BookInfo from './pages/BookInfo'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Shelf} />
      <Route path="/detail/:id" component={BookInfo} />
    </Switch>
  )
}
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Marketing from './pages/Marketing'
import BookDetail from './pages/BookDetail'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Marketing} />
      <Route path="/detail/:id" component={BookDetail} />
    </Switch>
  )
}
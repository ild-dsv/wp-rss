import React from 'react'
import { Route, Switch } from 'react-router'

import Head from '../components/Head'
import Home from './components/Home'
import About from './components/About'
import Page404 from './components/Page404';

export default ({ staticContext, lang }) => (
  <div>
    <Head />
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/about"
        component={About}
      />
      <Route
        path="*"
        component={Page404}
      />
    </Switch>
  </div>
)

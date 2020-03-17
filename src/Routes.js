import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Blog from './blog/Blog';
import Projects from './projects/Projects';

export const ROUTE_NAMES = {
  HOME: '/',
  BLOG: '/blog',
  PROJECTS: '/projects',
  NOT_FOUND: '/404'
};

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_NAMES.HOME} component={Home} />
      <Route path={ROUTE_NAMES.BLOG} component={Blog} />
      <Route path={ROUTE_NAMES.PROJECTS} component={Projects} />
      <Route path={ROUTE_NAMES.NOT_FOUND}>
        <h1>Page not found :(</h1>
      </Route>
      <Route path='*'>
        <Redirect to={ROUTE_NAMES.HOME} />
      </Route>
    </Switch>
  );
};

export default Routes;

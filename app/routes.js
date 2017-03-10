// @flow
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import HomePage from './containers/home/HomePage'
import RootLayout from './containers/RootLayout';
import CounterPage from './containers/CounterPage';


export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/experimental" component={CounterPage}/>
    </Route>
);

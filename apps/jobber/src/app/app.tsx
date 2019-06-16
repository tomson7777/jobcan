import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.scss';
import { Login } from './components/auth/login/login';
import { PageNotFound } from './components/core/page-not-found/page-not-found';
import ViewContainer from './components/layout/ViewContainer';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={ViewContainer}/>
        <Route path="/login" component={Login}/>
        <Route component={PageNotFound}/>
      </Switch>
    );
  }
}


export default App;

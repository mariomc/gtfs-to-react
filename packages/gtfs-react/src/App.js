import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom';

import StopsContainer from './containers/StopsContainer';
import RoutesContainer from './containers/RoutesContainer';
import RouteContainer from './containers/RouteContainer';

import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/stops" component={StopsContainer}/>
      <Route exact path="/routes" component={RoutesContainer}/>
      <Route exact path="/routes/:id" component={RouteContainer}/>
      <Redirect from={'/'} to={'/routes'}/>
    </Switch>
  </Router>
)

export default App;

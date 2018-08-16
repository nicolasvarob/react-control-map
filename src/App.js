import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainMap from './views/MainMap';
import Reporting from './views/Reporting';
import Login from './views/Login';

import './App.css';

class App extends Component {

  state = {
    loading: true
  }

  render() {
    let redirect;
    if (!this.state.loading) {
      redirect = <Redirect to="/login" />
    } else {
      redirect = ''
    }
    return (
      <div className="container-fluid">
        {redirect}
        <Switch>
          <Route path="/" component={MainMap} exact />
          <Route path="/reporting" component={Reporting} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );

  }
}

export default App;

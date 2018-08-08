import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import MainMap from './views/MainMap';
import Reporting from './views/Reporting';

import store from './store';

import './App.css'

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div className="container-fluid">
          <Switch>
            <Route path="/" component={MainMap} exact />
            <Route path="/reporting" component={Reporting} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;

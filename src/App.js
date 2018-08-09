import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainMap from './views/MainMap';
import Reporting from './views/Reporting';


import './App.css'

class App extends Component {

  state={
    loading:false
  }

  render() {

    return (
        <div className="container-fluid">
          <Switch>
            <Route path="/" component={MainMap} exact />
            <Route path="/reporting" component={Reporting} />
          </Switch>
        </div>
    );
  }
}

export default App;

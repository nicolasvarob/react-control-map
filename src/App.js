import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MainMap from './views/MainMap';

import store from './store';

import './App.css'

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div className="container-fluid">
          <MainMap />
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MainMap from './views/MainMap';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <MainMap />
      </div>
    );
  }
}

export default App;

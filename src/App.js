import React, { Component } from 'react';
import MainMap from './views/MainMap';
import SideDrawer from './components/Navigation/Sidebar/SideDrawer';
import Navbar from './components/Navigation/Navbar/Navbar';
import './App.css'

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState)=>{
      return { sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  render() {    

    return (
      <div className="container-fluid">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <MainMap />
        <SideDrawer visible={this.state.sideDrawerOpen}/>
      </div>
    );
  }
}

export default App;

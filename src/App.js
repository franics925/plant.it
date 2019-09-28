import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search';
import User from './components/User/User'

class App extends Component{

  state = {
    SearchValue: '',
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>plant.it</h1>
        </header>
        <div className="Search">
          < Search />
        </div>
        <div className="User">
          < User />
        </div>
      </div>
    )
  };
}

export default App;

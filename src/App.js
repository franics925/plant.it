import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search';
import User from './components/User/User'

class App extends Component{
  state = {
    SearchValue: '',
  }
  handleSearch = (event) => {
    console.log('search button clicked');
    this.makeApiCall(this.state.searchValue);
  };

  handleOnChange = (event) => {
      console.log('change in search bar')
      console.log(event.searchValue);
  };

  makeApiCall = searchInput => {
      // var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
      // fetch(searchUrl)
      // .then(response => {
      // return response.json();
      // })
      // .then(jsonData => {
      // console.log(jsonData);
      
      // });
  };
  
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

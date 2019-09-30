import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search';
import User from './components/User/User';
import { Route } from 'react-router-dom';

const plants=['Spider Plant', 'Philodendron', 'Peace Lily', 'Devils Ivy', 'Ficcus', 'Palm', 'Boston Fern'];

class App extends Component{
  state = {
    SearchValue: '',
  }

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
          < Search 
            plants={plants}
          />
        </div>
        <Route component={User}/>
        {/* <div className="User">
          < User 
            plants={plants}
          />
        </div> */}
      </div>
    )
  };
}

export default App;

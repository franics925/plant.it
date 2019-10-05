import React, { Component } from 'react';
import '../App/App.css';
import Search from '../../components/Search/Search';
import User from '../../components/User/User';
import { Route } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage';
import NavBar from '../../components/NavBar/NavBar';

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
        < NavBar />
        < SearchPage />
        <div className="Search">
          < Search 
            plants={plants}
          />
        </div>
        <Route path='/user' render={() => (
          <User/>
        )}/>
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

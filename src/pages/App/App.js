import React, { Component } from 'react';
import '../App/App.css';
import Search from '../../components/Search/Search';
import User from '../../components/User/User';
import { Route, Switch, Redirect } from 'react-router-dom';
// import SearchPage from '../../pages/SearchPage/SearchPage';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import LoginPage from '../LoginPage/LoginPage';


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


  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  render() {
    return (
      <div>
        <div className="App">
          < NavBar />
          <Switch>

            <Route exact path='/' render={() =>
              <Search
                handleLogout={this.handleLogout}
                user={this.state.user}
                plants ={plants}
              />
            }/>

            {/* <div className="Search">
              < Search 
                plants={plants}
              />
            </div> */}

            <Route exact path='/user' render={() => (
              <User/>
            )}/>

            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>

            <Route exact path='/login' render={({ history }) => 
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
        </Switch>
        </div>
      </div>
    );

  }
}

export default App;

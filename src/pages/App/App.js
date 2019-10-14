import React, { Component } from 'react';
import '../App/App.css';
import Search from '../../components/Search/Search';
import User from '../../components/User/User';
import { Route, Switch,} from 'react-router-dom';
// import SearchPage from '../../pages/SearchPage/SearchPage';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import LoginPage from '../LoginPage/LoginPage';
import plantService from '../../utils/plantService';

class App extends Component{
  state = {
    searchResults: [],
    query: false,
    searchLoading: false,
    plantDetailsLoading: false,
    plantSelectedDetails: [],
    plantSelectedId: '',
    user: userService.getUser()
  }

    handleSearch = async (event) => {
        console.log('search button clicked');
        console.log(`query ${this.state.query}`);
        this.setState({
            searchLoading: true,
            searchResults: [],
            plantSelectedDetails: [],
            plantSelectedId: '',
        })
        let searchResults = await plantService.search(this.state.query).then(res => JSON.parse(res));
        
        this.setState({ 
            searchResults: searchResults,
            searchLoading: false,
            query: true
        })
    };
    
    handleOnChange = (event) => {
        this.setState({
            query: (event.target.value)
        })

        console.log('change in search bar')
        console.log(event.target.value);
    };

    handlePlantDetails = async (plant) => {
        console.log('PlantDetails button clicked', plant.id);
        this.setState({
            plantDetailsLoading: true,
            plantSelectedDetails: [],
            plantSelectedId: plant.id

        })
        let plantDetails = await plantService.queryPlant(plant.id)
            .then(res => JSON.parse(res));
        
        this.setState({
            plantSelectedDetails: plantDetails,
            plantDetailsLoading: false
        })
    };


  componentDidMount() {
    fetch('')
    .then(res => res.json())
    .then((data) => {
      this.setState({ plants: data})
    })
    .catch(console.log)
  }


  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  
  render() {
    return (
      <div>
        <div className="App">
          < NavBar 
            {...this.state}
            handleSearch={this.handleSearch}
            handleOnChange={this.handleOnChange}
            handlePlantDetails={this.handlePlantDetails}
          />
          <Switch>
            <Route exact path='/' render={() =>
              <Search
                handleLogout={this.handleLogout}
                handleOnChange={this.handleOnChange}
                handlePlantDetails={this.handlePlantDetails}
                user={this.state.user}
                {...this.state}
              />
            }/>

            <Route exact path='/user' render={() => (
              <User
                user={this.state.user}
              />
            )}/>

            }/>
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







  // makeApiCall = searchInput => {
  //     // var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  //     // fetch(searchUrl)
  //     // .then(response => {
  //     // return response.json();
  //     // })
  //     // .then(jsonData => {
  //     // console.log(jsonData);
      
  //     // });
  // };
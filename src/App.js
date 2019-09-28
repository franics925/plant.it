import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>plant.it</h1>
      </header>
      <div className="Search">
        {/* <div className="SearchFilters">
          < SearchFilters />
        </div> */}
        <div className="SearchBar">
          < SearchBar />
        </div>

      </div>
      <div className="UserProfile">
        UserProfile
      </div>
    </div>
  );
}

export default App;

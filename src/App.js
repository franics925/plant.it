import React from 'react';
import './App.css';
import Search from './components/Search/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>plant.it</h1>
      </header>
      <div className="Search">
        < Search />
      </div>
      <div className="UserProfile">
        UserProfile
      </div>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import style from './SearchBar.module.css';
// import { directive } from '@babel/types';

class SearchBar extends Component {
    state = {
        SearchValue:'',
    };

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
            <div className={style.SearchBar}>
                <input 
                    name="text"
                    type="text"
                    placeholder="Search for a plant by common or scientific name"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                />
                <button
                    className="SearchButton"
                    onClick={this.handleSearch}
                >
                Search
                </button>
            </div>
        )
    };
};

export default SearchBar;
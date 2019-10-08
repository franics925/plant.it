import React, { Component } from 'react';
import style from './SearchBar.module.css';
import plantService from '../../../utils/plantService';

// import { directive } from '@babel/types';

class SearchBar extends Component {
    state = {
        results: [],
        searchValue:'',
    };

    handleSearch = async (event) => {
        console.log('search button clicked');
        let results = await plantService.search().then(res => JSON.parse(res));
        
        this.setState({ 
            results,
            searchValue: '' 
        })
    };

    handleOnChange = (event) => {
        console.log('change in search bar')
        console.log(event.searchValue);
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
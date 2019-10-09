import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';
import SearchResults from './SearchResults/SearchResults';
import style from './Search.module.css';
import plantService from '../../utils/plantService';


class Search extends Component {
    state = {
        searchResults: [],
        query: '',
    };

    handleSearch = async (event) => {
        console.log('search button clicked');
        let searchResults = await plantService.search().then(res => JSON.parse(res));
        
        this.setState({ 
            searchResults: searchResults,
            // query: this.search.value
        })
    };

    handleFilters = async (event) => {
        console.log('AdjustFilters button clicked')
    }

    handleOnChange = (event) => {
        this.setState({
            query: (event.searchValue)
        })

        console.log('change in search bar')
        console.log(event.searchValue);
    };

    render() {
        return (
            <div className={style.Search}>
                < SearchBar
                    handleSearch={this.handleSearch}
                    handleOnChange={this.handleOnChange}

                />
                <div className={style.SearchPanels}>
                    <div className={style.SearchPanelLeft}>
                        < SearchFilters 
                            
                        />
                    </div> 
                    <div className={style.SearchPanelRight}>
                        < SearchResults 
                            searchResults={this.state.searchResults}                        />
                    </div>
                </div>
            </div>
        )
    };
};

export default Search;

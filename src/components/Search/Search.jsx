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
        loading: false
    };

    handleSearch = async (event) => {
        console.log('search button clicked');
        console.log(`query ${this.state.query}`);
        this.setState({
            loading: true,
            searchResults: []
        })
        let searchResults = await plantService.search(this.state.query).then(res => JSON.parse(res));
        
        this.setState({ 
            searchResults: searchResults,
            loading: false
            // query: this.search.value
        })
    };
    
    handleFilters = async (event) => {
        console.log('AdjustFilters button clicked')
    }

    handleAddToPlants =(event) => {
        console.log('Add ToMyPlants Button Clicked')
    }
    
    handleOnChange = (event) => {
        this.setState({
            query: (event.target.value)
        })

        console.log('change in search bar')
        console.log(event.target.value);
    };

    render() {
        return (
            <div className={style.Search}>
                < SearchBar
                    handleSearch={this.handleSearch}
                    handleOnChange={this.handleOnChange}

                />
                {this.state.loading && <text>search loading</text>}
                <div className={style.SearchPanels}>
                    <div className={style.SearchPanelLeft}>
                        < SearchFilters 
                            
                        />
                    </div> 
                    <div className={style.SearchPanelRight}>
                        < SearchResults
                            handleAddToPlants={this.handleAddToPlants}
                            searchResults={this.state.searchResults} 
                        />
                    </div>
                </div>
            </div>
        )
    };
};

export default Search;

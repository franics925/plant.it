import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import PlantDetails from './PlantDetails/PlantDetails';
import SearchResults from './SearchResults/SearchResults';
import style from './Search.module.css';
import plantService from '../../utils/plantService';



class Search extends Component {
    state = {
        searchResults: [],
        query: '',
        searchLoading: false,
        plantSelectedDetails: [],
        plantSelectedId: '',
    };

    handleSearch = async (event) => {
        console.log('search button clicked');
        console.log(`query ${this.state.query}`);
        this.setState({
            searchLoading: true,
            searchResults: [],
        })
        let searchResults = await plantService.search(this.state.query).then(res => JSON.parse(res));
        
        this.setState({ 
            searchResults: searchResults,
            searchLoading: false
            // query: this.search.value
        })
    };
    

    handlePlantDetails = async (plant) => {
        console.log('PlantDetails button clicked', plant.id);
        this.setState({
            plantSelectedDetails: [],
            plantSelectedId: plant.id

        })
        let plantDetails = await plantService.queryPlant(plant.id).then(res => JSON.parse(res));
        
        this.setState({
            plantSelectedDetails: plantDetails
        })
    };
    
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
                {this.state.searchLoading && <text>search loading</text>}
                <div className={style.SearchPanels}>
                    <div className={style.SearchPanelLeft}>
                        < PlantDetails
                            plantSelectedId={this.state.plantSelectedId}
                            plantSelectedDetails={this.state.plantSelectedDetails}
                        />
                    </div> 
                    <div className={style.SearchPanelRight}>
                        < SearchResults
                            handlePlantDetails={this.handlePlantDetails}
                            searchResults={this.state.searchResults} 
                        />
                    </div>
                </div>
            </div>
        )
    };
};

export default Search;

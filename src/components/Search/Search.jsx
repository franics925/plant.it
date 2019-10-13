import React, { Component } from 'react';
import PlantDetails from './PlantDetails/PlantDetails';
import SearchResults from './SearchResults/SearchResults';
import style from './Search.module.css';



class Search extends Component {
    render() {
        return (
            <div className={style.Search}>
                <div className={style.SearchPanels}>
                    <div className={style.SearchPanelLeft}>
                        < SearchResults
                            handlePlantDetails={this.props.handlePlantDetails}
                            searchResults={this.props.searchResults} 
                            searchLoading={this.props.searchLoading}
                        />
                    </div>
                    <div className={style.SearchPanelRight}>
                        < PlantDetails
                            plantSelectedId={this.props.plantSelectedId}
                            plantSelectedDetails={this.props.plantSelectedDetails}
                            plantDetailsLoading={this.props.plantDetailsLoading}
                        />
                    </div> 
                </div>
            </div>
        )
    };
};

export default Search;

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
                        {this.props.query && 
                        < SearchResults
                            // className={style.SearchPanelLeft}
                            handlePlantDetails={this.props.handlePlantDetails}
                            searchResults={this.props.searchResults} 
                            searchLoading={this.props.searchLoading}
                        />}
                    </div>

                    {this.props.plantSelectedId && 
                        < PlantDetails
                            className={style.SearchPanelRight}
                            plantSelectedId={this.props.plantSelectedId}
                            plantSelectedDetails={this.props.plantSelectedDetails}
                            plantDetailsLoading={this.props.plantDetailsLoading}
                        />}
                    
                </div>
            </div>
        )
    };
};

export default Search;

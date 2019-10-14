import React, { Component } from 'react';
import PlantDetails from './PlantDetails/PlantDetails';
import SearchResults from './SearchResults/SearchResults';
import style from './Search.module.css';



class Search extends Component {
    render() {
        return (
            <div className={style.Search}>
                <div className={style.SearchPanels}>

                    {this.props.resultsLoaded &&
                        <div className={style.SearchPanelLeft}>
                            {this.props.resultsLoaded &&
                            < SearchResults
                                handlePlantDetails={this.props.handlePlantDetails}
                                searchResults={this.props.searchResults} 
                                searchLoading={this.props.searchLoading}
                                {...this.props}
                            />}
                        </div>
                    }

                    {this.props.plantSelectedId && 
                        < PlantDetails
                            className={style.SearchPanelRight}
                            plantSelectedId={this.props.plantSelectedId}
                            plantSelectedDetails={this.props.plantSelectedDetails}
                            plantDetailsLoading={this.props.plantDetailsLoading}
                        />
                    }
                    
                </div>
            </div>
        )
    };
};

export default Search;

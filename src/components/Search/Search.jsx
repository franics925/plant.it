import React, { Component } from 'react';
import PlantDetails from './PlantDetails/PlantDetails';
import SearchResults from './SearchResults/SearchResults';
import style from './Search.module.css';
import About from '../About/About';



class Search extends Component {
    render() {
        return (
            <div className={style.Search}>
                {this.props.resultsLoaded ? 
                    <div className={style.SearchPanels}>
                        <div className={style.SearchPanelLeft}>
                            < SearchResults
                                handlePlantDetails={this.props.handlePlantDetails}
                                searchResults={this.props.searchResults} 
                                searchLoading={this.props.searchLoading}
                                {...this.props}
                            />
                        </div>

                        {this.props.plantSelectedId && 
                            < PlantDetails
                                className={style.SearchPanelRight}
                                plantSelectedId={this.props.plantSelectedId}
                                plantSelectedDetails={this.props.plantSelectedDetails}
                                plantDetailsLoading={this.props.plantDetailsLoading}
                            />
                        }
                        
                    </div> 
                    : < About />
                }
            </div>
        )
    };
};

export default Search;

import React from 'react';
import style from './SearchResults.module.css';
import Preloader from '../../Preloader/Preloader';

const TREFLE_TOKEN = "REMwZDF3cStYN28vZkJTeU9tWm9Bdz09";
// import About from '../../About/About';

const SearchResults = (props) => (
    <div className={style.SearchResults}>
        {props.searchLoading && < Preloader />}
        {/* < About /> */}
        <ul>
        { props.resultsLoaded && props.priorQuery ? 
        <div className={style.ResultsPrompt}>
            <h3>Showing results for: <h4>{props.priorQuery}</h4></h3>
        </div> : ''
        }
            {props.searchResults.sort().map((plant, idx) =>
                <div 
                    className={style.SearchResult} 
                    key={idx}
                >
                    <div className={style.PlantNames}>
                        <h3>{plant.common_name}</h3>
                        <a href={`https://www.google.com/search?q=${plant.scientific_name}`} target="_blank" rel="noopener noreferrer" className={style.PlantLink}>{plant.scientific_name}</a>
                    </div>

                    <a href={`${plant.link}?token=${TREFLE_TOKEN}`} target="_blank" rel="noopener noreferrer" className={style.PlantLink}>    
                    Trefle Link
                    </a>

                    Plant ID:<br/>{plant.id}

                    <div className={style.Buttons}>
                        <button 
                            className={style.PlantDetailsButton}
                            onClick={() => props.handlePlantDetails(plant)}
                        >
                        Plant Details
                        </button>
                    </div>
                </div>
            )}
        </ul>
    </div>
)

export default SearchResults;
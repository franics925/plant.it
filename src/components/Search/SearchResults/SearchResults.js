import React from 'react';
import style from './SearchResults.module.css';
// import About from '../../About/About';

const SearchResults = (props) => (
    // let listItems = this.props.searchResults[0].common_name;
    <div className={style.SearchResults}>
        SearchResults<br/>
        {/* < About /> */}
        <ul>
            {props.searchResults.sort().map((plant, idx) =>
                <div 
                    className={style.SearchResult} 
                    key={idx}
                    >
                    <a href={`https://www.google.com/search?q=${plant.common_name}`} target="_blank" rel="noopener noreferrer" className={style.PlantLink}>    
                    {plant.common_name}
                    </a>
                    <div className={style.Buttons}>
                        <button className={style.AddToPlantsButton}>Add To My Plants</button>
                    </div>
                </div>
            )}
            {/* {props.searchResults[0]} */}
        </ul>
    </div>
)

export default SearchResults;
import React from 'react';
import style from './SearchResults.module.css';
// import About from '../../About/About';

const SearchResults = (props) => (
    // const listItems = props.searchResults.map((d) => <li key={d.id}>{d.common_name}</li>);
    <div className={style.SearchResults}>
        SearchResults<br/>
        {/* < About /> */}
        <ul>
            {props.plants.sort().map((plant, idx) =>
                <div 
                    className={style.SearchResult} 
                    key={idx}
                    >
                    <a href={`https://www.google.com/search?q=${plant}`} target="_blank" rel="noopener noreferrer" className={style.PlantLink}>    
                    {plant}
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
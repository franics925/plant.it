import React from 'react';
import style from './SearchResults.module.css';

const TREFLE_TOKEN = process.env.TREFLE_TOKEN;
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
                    <div className={style.commonName}>
                        <h3>Common Name:</h3>
                        <h5>{plant.common_name}</h5>
                    </div>

                    <div className={style.ScientificName}>
                        <h3>Scientific Name:</h3>
                        <h5>{plant.scientific_name}</h5>
                    </div>

                    <a href={`${plant.link}?token=${TREFLE_TOKEN}`} target="_blank" rel="noopener noreferrer" className={style.PlantLink}>    
                    Treffle Link
                    </a>

                    Plant ID:<br/>{plant.id}

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
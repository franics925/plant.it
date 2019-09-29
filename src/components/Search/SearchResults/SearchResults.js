import React from 'react';
import style from './SearchResults.module.css';
// import About from '../../About/About';

const SearchResults = (props) => (
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
                        <button className={style.WishListButton}>WishList</button>
                        <button className={style.AddToPlantsButton}>AddToPlants</button>
                    </div>
                </div>
            )}
        </ul>
    </div>
)

export default SearchResults;
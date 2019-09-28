import React from 'react';
import style from './SearchResults.module.css';
// import About from '../../About/About';

const SearchResults = (props) => (
    <div className={style.SearchResults}>
        SearchResults<br/>
        {/* < About /> */}
        <ul>
            {props.plants.map((plant, idx) =>
                <div 
                    className={style.SearchResult} 
                    key={idx}
                    >
                    {plant}
                    <button className={style.WishListButton}>WishList</button>
                    <button className={style.AddToPlantsButton}>AddToPlants</button>
                </div>  
            )}
        </ul>
    </div>
)

export default SearchResults;
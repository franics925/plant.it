import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';
import SearchResults from './SearchResults/SearchResults';
import style from './Search.module.css';


const Search = (props) => (
    <div className={style.Search}>
        < SearchBar />
        <div className={style.SearchPanels}>
            <div className={style.SearchPanelLeft}>
                < SearchFilters />
            </div> 
            <div className={style.SearchPanelRight}>
                < SearchResults 
                    plants={props.plants}
                />
            </div>
        </div>
    </div>
);

export default Search;

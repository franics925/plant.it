import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';
import SearchResults from './SearchResults/SearchResults';
import style from './Search.module.css';


const Search = (props) => (
    <div className={style.Search}>
        <div className={style.SearchPanelLeft}>
            < SearchFilters />
        </div> 
        <div className={style.SearchPanelRight}>
            < SearchBar />
            < SearchResults />
        </div>
    </div>
);

export default Search;

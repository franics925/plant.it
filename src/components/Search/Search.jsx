import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';
import SearchResults from './SearchResults/SearchResults';
import style from './Search.module.css';


const Search = (props) => (
    <div className={style.Search}>
        < SearchBar />
        < SearchFilters />
        < SearchResults />
    </div>
)

export default Search;

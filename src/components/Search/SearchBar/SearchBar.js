import React from 'react';
import style from './SearchBar.module.css';
// import { directive } from '@babel/types';

const SearchBar = (props) => {
    return (
        <div className={style.SearchBar}>
                <input 
                    placeholder="Search for a plant by common or scientific name"
                    onChange={event => props.handleOnChange(event)}
                />
                <button
                    className="SearchButton"
                    onClick={props.handleSearch}
                >
                Search
                </button>
        </div>
    );
};

export default SearchBar;
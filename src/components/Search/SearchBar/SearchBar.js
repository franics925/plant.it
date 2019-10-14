import React from 'react';
import style from './SearchBar.module.css';

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
                {props.query ? <p>Search</p>: <p>Feeling Lucky?</p>}
                </button>
        </div>
    );
};

export default SearchBar;
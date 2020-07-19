import React from 'react';

const SearchBar = () => {
    return (
        <div className='search_bar'>
            <div className='create_search_inputs_container'>
                <input id='quantity' placeholder='Qty'/>
                <input id='unit' placeholder='Unit'/>
                <input id='search_ing' placeholder='Search Ingredients'/>
                <button id='search_submit'>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
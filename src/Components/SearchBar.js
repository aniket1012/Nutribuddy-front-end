import React, {Component} from 'react';

class SearchBar extends Component {

    state = {
        quantity: null,
        unit: null,
        searchTerm: null,

        
    }

    render() {
        return (
            <div className='search_bar'>
                <div className='create_search_inputs_container'>
                    <input id='quantity' placeholder='Qty' type='number'/>
                    <input id='unit' placeholder='Unit'/>
                    <input id='search_ing' placeholder='Search Ingredients 🔍'/>
                    <button class='search_submit'>Search</button>
                </div>
            </div>
        );

    }
};

export default SearchBar;


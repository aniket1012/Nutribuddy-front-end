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
                    <select  id='unit' name='unit' onChange={this.handleChange}>
                                <option value=''>Unit</option>
                                <option value='teaspoon'>teaspoon</option>
                                <option value='tablespoon'>tablespoon</option>
                                <option value='fluiud ounce'>fluiud ounce</option>
                                <option value='cup'>cup</option>
                                <option value='pint'>pint</option>
                                <option value='quart'>quart</option>
                                <option value='gallon'>gallon</option>
                                <option value='millileter'>millileter</option>
                                <option value='liter'>liter</option>
                                <option value='pound'>pound</option>
                                <option value='ounce'>ounce</option>
                                <option value='milligram'>milligram</option>
                                <option value='gram'>gram</option>
                                <option value='kilogram'>kilogram</option>
                            </select>
                    <input id='search_ing' placeholder='Search Ingredients 🔍'/>
                    <button className='search_submit'>Search</button>
                </div>
            </div>
        );

    }
};

export default SearchBar;


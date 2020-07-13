import React from 'react';
import Searchbar from '../Components/SearchBar'

const CreateMealContainer = (props) => {
    console.log(props);
    
    return (
        <div className='create_container'>
            <Searchbar/>
            <div className='ingredient_container'>
                Container
            </div>
        </div>
    );
};

export default CreateMealContainer;
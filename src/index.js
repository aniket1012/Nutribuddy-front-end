import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
// import reducer from './reducers/reducer'

function reducer(prevState, action) {
   // whatever is returned from reducer becomes state  
   //called on initialization to initialize state

    
}

const store = createStore(reducer)




ReactDOM.render(<App />, document.getElementById('root'));



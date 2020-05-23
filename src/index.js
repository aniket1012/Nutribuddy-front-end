import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import reducer from './reducers/reducer'


const store = createStore(reducer)
console.log('BEFORE', store.getState());


store.dispatch({type: 'LIKE'})

console.log('AFTER', store.getState());




ReactDOM.render(<App/>, document.getElementById('root'));



import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Navbar from './Containers/Navbar'
import MainContainer from './Containers/MainContainer'
import CreateMealContainer from './Containers/CreateMealContainer'


class App extends Component {


  render(){
    return (
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path='/'component={MainContainer}/>
          <Route exact path='/create_a_meal' component={CreateMealContainer}/>
        </Switch>
  
      </div>
    );

  }
} 

export default App;

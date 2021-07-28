import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Header from './Containers/Header'
import MainContainer from './Containers/MainContainer'
import Login from './Forms/Login'

class App extends Component {


  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/login'component={Login}/>
          <Route exact path='/'component={MainContainer}/>
        </Switch>
  
      </div>
    );

  }
} 

export default App;

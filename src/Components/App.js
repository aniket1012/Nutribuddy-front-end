import React from 'react'
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from './UI/Theme'
import Landing from './Landing';

import Header from './UI/Header'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route exact path='/createmeal' component={() => <div>CREATE MEAL</div>}></Route>
          <Route exact path='/mymeals' component={() => <div>MY MEALS</div>}></Route>
          <Route exact path='/login' component={() => <div>LOGIN</div>}></Route>
          <Route exact path='/signup' component={() => <div>SIGN UP</div>}></Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App


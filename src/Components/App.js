import React from 'react'
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './UI/Theme'


import Header from './UI/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      Hello
    </ThemeProvider>
  )
}

export default App


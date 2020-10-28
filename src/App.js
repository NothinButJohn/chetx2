import React, { Component, useState } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Tyler from './components/Tyler'
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as ROUTES from './routes'

function App(){
  return(
    <Router>
      <div>
        <Header />
        <Navigation />
      </div>
    </Router>
  )
}



export default App;
 
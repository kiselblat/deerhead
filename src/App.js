import React, { useState, UseEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact } from './pages'
import { Header, Footer } from './components'
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        {/* <div className = "content"> */}

        <Switch>
          <Route exact path='/' render={() => {return <Home />}} />
          <Route exact path='/our-story' render={() => {return <About />}} />
          <Route exact path='/contact-us' render={() => {return <Contact />}} />
        </Switch>

        {/* </div>*/}
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;

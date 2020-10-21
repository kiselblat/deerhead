import React, { useState, UseEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Frontpage, About, Contact } from './pages'
import { Header, Footer } from './components'
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    // <div className="App">
      <Router className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => {return <Frontpage />}} />
          <Route exact path='/our-story' render={() => {return <About />}} />
          <Route exact path='/contact' render={() => {return <Contact />}} />
        </Switch>
        <Footer />
      </Router>
    // </div>
  );
}

export default App;

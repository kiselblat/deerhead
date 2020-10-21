import React, { useState, UseEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Frontpage } from './pages'
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' render={() => {return <Frontpage />}} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

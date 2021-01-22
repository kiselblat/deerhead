import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact } from './pages'
import { Header, Footer } from './components'
// import logo from './logo.svg';
import './App.scss';

import data from './data.json'
console.log(data);
function App() {

  const [orderPopup, setOrderPopup] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  const handleOrderClick = () => {orderPopup ? setOrderPopup(false) : setOrderPopup(true)}

  const handleResize = () => {setWindowWidth(window.innerWidth)}

  const handleScroll = () => {setScrollHeight(window.scrollY)}

  useEffect(() => {
    // window.addEventListener("resize", handleResize);
    window.onresize = handleResize;
    window.onscroll = handleScroll;
  }, [])

  return (
    <div className="App">
        
      {orderPopup && 
        <div className={`popup order-popup`}>
            <button className={`close-button`} onClick={handleOrderClick}>X</button>
            <div className={`scrim`} />
        </div>}
        <code style={{position: 'fixed', color: 'white'}}>Width: {windowWidth}, Scroll Height: {scrollHeight}</code>
      <Router basename={process.env.PUBLIC_URL}>
        <Header 
          orderClick={handleOrderClick}
        />
            
        {/* <div className = "content"> */}
          <Switch>
            <Route exact path='/' render={() => <Home data={data} />} />
            <Route exact path='/our-story' render={() => <About data={data} />} />
            <Route exact path='/contact-us' render={() => <Contact data={data} />} />
          </Switch>
        {/* </div> */}
          {/* <div className='spacer' /> */}
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;

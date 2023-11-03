import About from './About/About';

import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';


import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Join from './Join/Join';
import Navbar from './Navbar/Navbar';
import Product from './Product/Product';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Productcase from './Productcase/Productcase';
import Kitchen from './Kitchen/Kitchen';
import Office from './Office/Office';
import Commercial from './Commercial/Commercial';
import Laboratory from './Laboratory/Laboratory';
import Other from './Other/Other';
import Raf from './Raffaello/Raf';
import Tiz from './Tiziano/Tiz';
import Power from './Powertrack/Power';

// import HashLoader from "react-spinners/HashLoader";







function App() {
  
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  // }
  //   , []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    , []);


  return (
    <Router>
      <ScrollToTop />
      <div className="App">

      {/* {
        loading ?
          <HashLoader

            color={"#d50606"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            className='loadder'
          />
          : 
          
          <> */}
          
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Router path="/Product"><Product /></Router>
          <Router path="/Productcase"><Productcase/> </Router>
          
          <Router path="/About"><About /></Router>
          <Router path="/Join">  <Join /></Router>
        </Switch>
        <Switch>
         <Router path="/Kitchen/Kitchen"><Kitchen/></Router>
         <Router path="/Office/Office"><Office/></Router>
         <Router path="/Commercial/Commercial"><Commercial/></Router>
         <Router path="/Laboratory/Laboratory"><Laboratory/></Router>
         <Router path="/Other/Other"><Other/></Router>
         
         <Router path="/Raffaelo/Raf"><Raf/></Router>
         <Router path="/Tiziano/Tiz"><Tiz/></Router>
         <Router path="/Powertrack/Power"><Power/></Router>
        </Switch>

        <Footer />
          {/* </>
          } */}
      
    
       
      </div>

    </Router>
  );
}

export default App;

import About from './About/About';
import Adapter from './Adapter/Adapter';
import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';


import React,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Join from './Join/Join';
import Navbar from './Navbar/Navbar';
import Product from './Product/Product';
import ScrollToTop from './ScrollToTop/ScrollToTop';


function App() {
  useEffect(()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}
  , []);

  return (
    <Router>
      <ScrollToTop/>
      <div className="App">

      <Navbar />
        <Switch>
      

          <Route exact path="/"><Home /></Route>
          <Router path="/Product"><Product /></Router>
          <Router path="/Adapter"> <Adapter /></Router>
          <Router path="/About"><About /></Router>
          <Router path="/Join">  <Join /></Router>

        </Switch>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;

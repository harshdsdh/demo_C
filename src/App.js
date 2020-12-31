import './index.css'
import React, { Component, useState } from "react";
import {Route, NavLink, HashRouter } from "react-router-dom";
import All from './All'
import Shortlisted from './Shortlisted'
import ShortlistedDataContext from "./ShortlistedDataContext";
import AllDataContext from './AllDataContext';
function App() {
  const Data = useState([])
  return (
    <ShortlistedDataContext.Provider value ={Data}>
    <AllDataContext.Provider value ={Data}>
    <HashRouter>
    <div className="App">
      <h1>City - Dashboard</h1>
      <div className='main'>
      <ul className='masterList'>
        <li><NavLink to='/'>All</NavLink></li>
        <li><NavLink to='shortlisted'>Shortlisted</NavLink></li>
      </ul>
      <div className='content'>
        <Route exact path="/" component={All}/>
        <Route path="/shortlisted" component={Shortlisted}/>
      </div>
      </div>
    </div>
    </HashRouter>
    </AllDataContext.Provider>
    </ShortlistedDataContext.Provider>
    
  );
}

export default App;

import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './navBar';
import Home from './home';
import Contact from './contactUs';
import Hotels from './hotels';
import { Dining } from './Dining';




const App = () => {
  return (
  <div>
  <Navbar/>
        <Routes>
        <Route path="" element={<Home />}/>
          <Route path="/HOME" element={<Home/>}/>
          <Route path="/HOTELS" element={<Hotels />} />
        <Route path="/DINING" element={<Dining/>}/>
        
        </Routes>
        <Contact />
      </div>
     
  );
}

export default App;

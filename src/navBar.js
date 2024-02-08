import React from 'react';
import insta from '../src/image/insta.jpg';
// import logo from '../src/image/logo.jpg';
import whats from '../src/image/whatsapp.png';
import navbarbg from '../src/image/navbarbg.png';
import './navBar.css';
import { Outlet, Link } from "react-router-dom";


const navItem={
   fontFamily: 'Courier New, monospace',
    fontSize: "1.2em",
    letterSpacing:'1.2px',
    fontWeight:'bold',
  
}

const navBar = () => {
  return (
   <div >
     <nav class="navbar navbar-expand-lg  navbar-dark fixed-top" style={{backgroundImage:`url(${navbarbg})`,backgroundAttachment:'fixed',paddingTop:'20px',paddingBottom:'20px'}}>
   
   {/* <a href="#home" class="navbar-brand "><img  class="img-fluid"  width="100px" alt=""/></a> */}
       <button class="navbar-toggler" type="button"  data-bs-toggle="collapse"  data-bs-target="#navmenu">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse"  id="navmenu">
         <ul class="navbar-nav ms-auto" style={navItem}>
           <li class="nav-item">
           <Link  class="nav-link" to="/HOME">HOME</Link>
           </li> 
           <li class="nav-item ">
           <Link  class="nav-link" to="/HOTELS">HOTELS</Link>
           </li>
          
           <li class="nav-item ">
             <a class="nav-link" href="/ABOUTUS">ABOUTUS</a>
           </li>
          
           </ul>
           </div>
           <li>
             <a  href=""><img src={insta} alt="inta" height="50px"style={{borderRadius:'10px'}}></img></a>
           </li>
           <li >
             <a  href=""><img src={whats} alt="inta" height="50px"style={{borderRadius:'8px',marginRight:'10px'}}></img></a>
           </li>
           
          </nav>
   </div>
  )
}

export default navBar

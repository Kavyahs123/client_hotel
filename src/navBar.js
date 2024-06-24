import React from 'react';
import './navBar.css';
import { Link } from "react-router-dom";


const navItem={
   fontFamily: 'Courier New, monospace',
    fontSize: "1.2em",
    letterSpacing:'1.2px',
    fontWeight:'bold',
  
}

const navBar = () => {
  return (
   <div >
     <nav class=" navbar navbar-expand-lg  fixed-top" style={{backgroundAttachment:'fixed',backgroundColor:"rgba(0,0,0,0.8)",marginRight:'10px',marginLeft:"10px"}}>
     <a style={{color:"orange"}}><span style={{color:'#006400'}}>༺</span> <span style={{fontStyle:'italic',fontSize:'70px'}}>𝓡</span>𝒶𝒹𝒾𝒶𝓃𝓉 𝓋𝒶𝓁𝓁𝑒𝓎 𝓇𝑒𝓈𝑜𝓇𝓉 <span style={{color:'#006400'}}>༺</span> </a>
 
          
       <button class="navbar-toggler" type="button"  data-bs-toggle="collapse"  data-bs-target="#navmenu">
         <span class="navbar-toggler-icon"></span>
       </button>
       
       <div class="collapse navbar-collapse"  id="navmenu">
         <ul class="navbar-nav ms-auto" style={navItem}>
           <li class="nav-item">
           <Link  class="nav-link" to="/HOME">HOME</Link>
           </li> 
           <li class="nav-item ">
           <Link  class="nav-link" to="/DINING">DINING</Link>
           </li>
           <li class="nav-item ">
           <Link  class="nav-link" to="/HOTELS">ROOMS</Link>
           </li>
          
           {/* <li class="nav-item ">
             <a class="nav-link" href="/ABOUTUS">ABOUTUS</a>
           </li> */}
           {/* <li>
           <a  href=""><img src={whats} alt="inta" height="30px"style={{borderRadius:'50%',marginRight:'15px'}}></img></a>
           <a href="" style={{textDecoration:'none',color:'#eee'}}><i class="bi bi-telephone-inbound" style={{color:"#eee",paddingRight:'7px'}}></i>8310241431</a>
           </li> */}
           </ul>
           </div>
           
           
          </nav>
   </div>
  )
}

export default navBar

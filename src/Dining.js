import React from 'react'
import dining from '../src/image/dining.jpg';
import restro from '../src/image/restro.jpg';
import restro1 from '../src/image/retro1.jpg';
import './hotel.css';


export const Dining = () => {
  return (
    <div>
<div style={{backgroundImage:`url(${dining})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
<h1 className="text-center animate__animated animate__backInDown animate_delay-1s" style={{fontFamiy:'sans-serif',color:'orange',paddingTop:'350px',paddingBottom:"200px",backgroundColor:"rgba(0,0,0,0.6)"}}> ༺ <span style={{fontSize:'60px'}}>𝓑</span>𝑒𝓈𝓉 𝓕𝑜𝑜𝒹 ༻</h1>
</div>
<div className="containerWithBackground">
      <div className="d-md-flex restro">
        <div className="restro1">
          <p className="text-center" style={{paddingTop:'40px'}}>
            Easy conversations with favorite drinks and choice of mouth-watering food. The satisfaction of such a scene is
            what we wish for all of our patrons to feel. So we invite you to come, relax on our comfy lounge sofas and
            enjoy your evening with our special signature drinks in hand and your favorite food on a plate.
          </p>
          <button type="button " class='btn' style={{border:'1.5px solid #cda05b',margin:'20px',marginBottom:'60px'}}>Our Menu</button>
        </div>
        <div className="restro2 " style={{color:'#bab8b8'}}>
          <h2 style={{borderBottom:'1px solid #cda05b'}}>BAR & RESTAURANT</h2>
         
          <p>
            50+ DELECTABLE SEAFOOD.
          </p>
          <p>
            100+ AUTHENTIC DISHES
          </p>
          <p style={{marginBottom:'80px'}}>
            Home to one of the best bars in town with an equally exceptional kitchen that can cook up authentic malvani
            cuisine and more that you simply cannot forget.
          </p>
        </div>
      </div>
      <img src={restro} alt="Restaurant" width="100%" className="backgroundImage" />
    </div>

  
  

        <div className="containerWithBackground">
      <div className="d-md-flex restro">
        <div className="restro2 scrn">
          <p className="text-center scrn1" style={{paddingTop:'40px',color:'#bab8b8'}}>
          The quality of food is superior, the service is efficient yet elegant and the spread is abundant with a special corner for smoked and grilled food. Add to this scene of fine dining the novelty of live music and you will have a ‘perfect time ever spent’ to mark in your memories.


          </p>
          <button type="button " class='btn' style={{border:'1.5px solid #cda05b',margin:'20px',marginBottom:'60px',color:'#bab8b8'}}>Our Menu</button>
        </div>
        <div className="restro1" >
          <h2 style={{borderBottom:'1px solid #cda05b'}}>Urban Flavours</h2>
         
          <p>
            50+ DELECTABLE SEAFOOD.
          </p>
          <p>
            100+ AUTHENTIC DISHES
          </p>
          <p style={{marginBottom:'80px'}}>
Urban Flavours, like its name suggests, serves a variety of flavours on a plate. North Indian, Chinese, and South American dishes in all their authenticity are served here. The elaborate buffet menu covers all delicacies that fit into a foodie’s dream come true.
          </p>
        </div>
      </div>
      <img src={restro1} alt="Restaurant" width="100%" className="backgroundImage" />
    </div>

   
</div>
  )
}

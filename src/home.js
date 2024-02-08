import React from 'react'
import 'animate.css';
import './home.css';
import home1 from '../src/image/home1.jpg';
import home2 from '../src/image/home2.jpg';
import home3 from '../src/image/home3.jpg';
import Drinks from './drinks';
import logo from '../src/image/logo.png';
import Banquets from './banquets';
const home = () => {
  return (
    <div>
 <div style={{ position: 'relative', width: '100%', height: '90vh', backgroundImage: `url(${home1})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', zIndex: 1 }}>

<div style={{ position: 'absolute', top: '65%', left: '70%', transform: 'translate(-50%, -50%)', textAlign: 'center', fontSize: '20px', width: '50%', backgroundColor: 'rgba(255,255,255,0.5)', padding: '50px' }}>
<img  src={logo} height="150px" width="150px"></img>
  <p className="text-dark">THINK HOSPITALITY. THINK FOOD GROUP.</p>
  <p style={{color:'grey'}}>FOOD Group is one of the leading brands serving the hospitality space in Bangalore.</p>
</div>

</div>


<div class="d-md-flex">
        <div class="col-md  text-center pt-5" style={{backgroundColor:'#f3fbf3'}} >
            <h3 style={{color:'orange'}}>Restaurants</h3>
            <h4 style={{fontStyle:'italic'}}>25 Years Of Service</h4>
         
        <p className="home3">WITH ROOTS THAT ARE 25 YEARS OLD  HAS ITS BRANCHES SPREAD ACROSS BANGALORE BEARING 5 THRIVING RESTAURANTS. EACH ESTABLISHMENT SPECIALIZES IN SERVING AUTHENTIC ANDHRA CUISINE BUT OUR EXPERTISE DOESN’T LIMIT TO THAT. WE PROVIDE FOOD AND SERVICE THAT REFLECTS OUR CORE BELIEFS TO MAKE EVERY MEAL A MEMORABLE EXPERIENCE.</p>
      <br></br>  <button type="button" style={{marginBottom:'50px'}} className="btn btn-success btn-lg ">Order Now <i class="bi bi-arrow-right"></i></button>
    </div>
    <div class="col-md" >
<img src={home2} alt="home2" width="100%" height="500px" ></img>
    </div>
</div>
<div>
  
          <div class="d-md-flex">
          <div class="col-md ">
<img src={home3} alt="home2" width="100%" height="500px" ></img>
    </div>
        <div class="col-md  text-center pt-5 " style={{backgroundColor:'#f3fbf3'}}>
            <h3 style={{color:'orange'}}>Catering</h3>
            <h4 style={{fontStyle:'italic'}}> Making Your Occasions Special</h4>
          
        <p className="home3">With a wide spread of delicious food boasting of many cuisines and delicacies to choose from and a humble service that brings smiles, our catering services are well known in Bangalore. Be it a big event with a long guest list or a small, personal gathering, we are well equipped to make it a memorable occasion. Weddings, reception parties, engagement parties, birthday parties or even corporate gatherings, we’ve done them all and more.</p>
      <br></br>  <button type="button" style={{marginBottom:'50px'}} className="btn btn-success btn-lg ">Book Us Now <i class="bi bi-arrow-right"></i></button>
    </div>
 
</div>
    </div>
    <Banquets/>
    <Drinks/>
    <div>
        {/* <div>
      <video src={videoparty} width="100%" autoPlay muted loop objectFit="contained"></video>
      </div> */}
      <div className=" party d-flex">
      <div>
        <button type="button" className="btn-large btn btn-success" style={{border :" 2px solid green",borderRadius:'5px',padding:'10px',marginRight:'30px'}}>BOOK A SUITE <i class="bi bi-arrow-right"></i></button>
      </div>
      <div>
        <button type="button" className="btn-large btn btn-success" style={{border:'2px solid green',borderRadius:'5px',padding:'10px'}}>CONTACT US<i class="bi bi-arrow-right"></i></button>
      </div>
      </div>
    </div>
</div>

  )
}
export default home;

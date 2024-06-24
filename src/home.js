import React from 'react'
import 'animate.css';
import './home.css';
import home5 from '../src/image/home5.jpg';

import aboutbg2 from '../src/image/aboutUs3.jpg';
import Rooms from './Rooms';
import game from '../src/image/game.jpg';
import rain from '../src/image/rain.jpg';
import trekk from '../src/image/trekk.jpg'
import { DayOut } from './DayOut';
import homebg1 from '../src/image/homebg1.jpg';


const home = () => {
  return (
    <div>


<div style={{  width: '100%', height: '600px', backgroundImage: `url(${home5})`, backgroundAttachment: 'fixed'}}>
  <div style={{backgroundColor:"rgba(0,0,0,0.4)",padding:'30px',paddingLeft:'80px'}}>
<h1 style={{paddingTop:"150px",color:'white',fontSize:'40px'}}>𝔼𝕞𝕓𝕣𝕒𝕔𝕖 <br></br><span style={{fontStyle:'italic',fontSize:'70px',color:'orange'}}>ℕ𝔸𝕋𝕌ℝ𝔼</span>  𝕊𝕖𝕣𝕖𝕟𝕚𝕥𝕪</h1>
<p style={{color:"#eee",width:"700px",maxWidth:'100%',letterSpacing:'1px'}}>Welcome to our tranquil nature-view resort, where every moment is a breath of fresh air. Surrounded by pristine wilderness, our retreat offers a serene escape into natural beauty. Immerse yourself in the sights and sounds of untouched landscapes, where relaxation meets the harmony of nature</p>
<button className='p-2 btn btn-success ' style={{letterSpacing:'1px'}} >Explore Now</button>
</div> 
</div>
  <div className='p-3' style={{position:'absolute',backgroundColor:'orange',bottom:'20px',right:'0px'}}> 
 <h5 style={{letterSpacing:'1px'}}>𝔯𝔞𝔱𝔦𝔫𝔤</h5>
 <h5 style={{color:"green"}}>★★★★☆</h5>
  </div>

<section id="aboutUs" className='p-5 d-md-flex'>
  <div>
<img className="mt-2" src={aboutbg2} width="320px" height="350px"  alt="" style={{border:'4px solid white',backgroundSize:'contain'}}></img>
<img className="aboutimg" src={aboutbg2} alt="" width="250px" height="200px" style={{marginTop:'-150px',marginLeft:'-40px',border:'10px solid orange'}}></img>
  </div>
  <div>
 <h3 className='text-center pt-4' style={{color:'orange'}}><span style={{color:'green'}}>༺</span> 𐌀𐌁Ꝋ𐌵𐌕 𐌵𐌔 <span style={{color:'green'}}>༺</span></h3>
 <p className="p-3" style={{ color: "#333", fontSize: "16px",letterSpacing:'1px'}}>
            Our resort is not just a place to stay, but an experience to remember. With a commitment to environmental sustainability, we ensure our operations leave minimal impact on the surrounding nature. Each guest is welcomed with warmth and care, ensuring a personalized experience that exceeds expectations.
           <br></br> Whether you're here for relaxation, adventure, or both, our resort offers a range of activities and amenities designed to cater to every guest's preferences. From guided nature walks to gourmet dining experiences, every aspect of your stay is crafted to create lasting memories.
          </p>
        
  </div>
</section>

<section className="p-5" style={{backgroundColor:'#4B6F44'}}>
    <h3 className="text-center" style={{color:"orange"}}> ༺ 𝓡𝒪𝒪𝓜𝒮 ༺</h3>
    <p className='text-center pb-3' style={{color:'#eee',letterSpacing:'1px'}}>All our rooms are designed to give you the ultimate experience in comfort, luxury and the most modern amenities created to suit every
traveller’s needs. Every room is equipped with a mini-bar, phone, wired and wireless internet, electronic safe, well-appointed bathrooms,
and dual line telephone and room service with a splendid view of the swimming pool, landscaped gardens or villas</p>
  <Rooms/>
  </section>












<div style={{borderBottom:'3px solid orange',color:'white',width:'24%',marginLeft:'20px',marginTop:'40px'}}>hiii</div>
        <div className=" container d-md-flex" style={{paddingTop:'80px',paddingBottom:'60px'}}>
           
            <div className='text-center'>
            <h1 style={{fontFamily:'cursive',fontStyle:'italic'}}>Quality Service</h1>
<p style={{color:'#a3a3a2',fontSize:'14px'}}>Quality service – Our services function true to the philosophy of hospitality: “Everything must be set for your comfort, satisfaction and memorable experience”.</p>
            </div>
            <div className='text-center'>
           <h1 style={{fontFamily:'cursive',fontStyle:'italic',color:'green'}}>Best Food</h1> 
<p style={{color:'#a3a3a2',fontSize:'14px',paddingRight:'20px',paddingLeft:'20px'}}>No life experience is ever complete without food. Life experiences with us are complete and unforgettable because of the food. We’ve got a bountiful menu that can materialise scrumptious food</p>
            </div>
            <div className="text-center">
            <h1 style={{fontFamily:'cursive',fontStyle:'italic',color:'green'}}>Luxury Rooms</h1>
<p style={{color:'#a3a3a2',fontSize:'14px'}}>Combine comfortable luxury with the serenity of nature and you will get a picture of what our stays look like. An experience of blissful rest, relaxation, and revival is guaranteed to be achieved</p>
            </div>
        </div>
        <div style={{borderBottom:'3px solid orange',color:'white',width:'20%',marginLeft:'76%',marginBottom:'60px'}}>hiii</div>





        <section className='p-5' style={{backgroundColor:"orange"}}>
        <h3 className="text-center" style={{color:"green"}}> ༺ 𝓔𝒳𝒫𝓔𝓡𝓘𝓔𝒩𝒞𝓔 ༺</h3>
        <div className="d-md-flex">
          <div className="p-5">
        <h5 style={{letterSpacing:'1px',color:'white'}}><span style={{fontSize:'60px',color:"green"}}>Ꮆ</span>αмє <span style={{fontSize:'60px',color:"green"}}> z</span>σηє</h5>
        <p style={{color:'#eee',letterSpacing:'1px'}}>Games zone with 3 Indoor Badminton courts, two lawn tennis courts, squash courts, facilities for table tennis, Snooker, Kids Play Area outdoor & Indoor is open for all resident guests along with all sporting equipment.</p>
        </div>
        <img  className="exp" src={game} alt="" height="300px" style={{boxShadow:'10px 10px 10px 10px rgba(0,0,0,0.2)',border:'5px solid white'}}></img>
        </div>
        <div className=" mt-2 d-md-flex">
        <div className="p-5">
        <h5 style={{letterSpacing:'1px',color:'white'}}><span style={{fontSize:'60px',color:"green"}}>ᖇ</span>𝔞𝔦𝔫 <span style={{fontSize:'60px',color:"green"}}>ᗪ</span>𝔞𝔫𝔠𝔢</h5>
        <p style={{color:'#eee',letterSpacing:'1px'}}>Games zone with 3 Indoor Badminton courts, two lawn tennis courts, squash courts, facilities for table tennis, Snooker, Kids Play Area outdoor & Indoor is open for all resident guests along with all sporting equipment.</p>
        </div>
        <img className="exp" src={rain} alt="" height="300px" style={{boxShadow:'10px 10px 10px 10px rgba(0,0,0,0.2)',border:'5px solid green'}}></img>
        </div>
        <div className="mt-2 d-md-flex">
          <div className="p-5">
        <h5 style={{letterSpacing:'1px',color:'white'}}><span style={{fontSize:'60px',color:"green"}}>Ƭ</span>𝔯𝔢𝔨𝔨𝔦𝔫𝔤</h5>
        <p style={{color:'#eee', letterSpacing:'1px'}}>Explore Nature's Bounty with Our Guided Trekking Adventures. Our resort offers exhilarating trekking experiences amidst breathtaking landscapes. Discover hidden trails, stunning viewpoints, and serene natural surroundings.</p>
        </div>
        <img  className="exp" src={trekk} alt="" height="300px" style={{boxShadow:'10px 10px 10px 10px rgba(0,0,0,0.2)',border:'5px solid white'}}></img>
        </div>

</section>


<DayOut/>


        <div className="party d-flex" style={{height:'400px',backgroundImage:`url(${homebg1})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div >
        <button type="button" className="btn-large " style={{borderRadius:'5px',backgroundColor:"orange",padding:'10px',marginRight:'30px'}}>BOOK A SUITE <i class="bi bi-arrow-right"></i></button>
      </div>
      <div>
        <button type="button" className="btn-large" style={{backgroundColor:'orange',borderRadius:'5px',padding:'10px'}}>CONTACT US<i class="bi bi-arrow-right"></i></button>
      </div>
      </div>
    
    </div>

  )
}
export default home;

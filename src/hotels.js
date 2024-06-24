import React  from 'react';
import hotel from '../src/image/hotel.jpg';
import resort from '../src/image/resort.jpg';

import './hotel.css';
const Hotels = () => {
   
  const containerStyle = {
    
    
    position: 'relative',
    paddingTop: '400px',
    backgroundAttachment:'fixed'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  };
  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  };
  const buttonStyle = {
    color:'#b4b1af',
    border:'1px solid #ac5f20',
    margin:'30px',
    backgroundColor:'rgba(255,255,255,0)'
  };

  return (
    <div>
    <div style={containerStyle} >
      <img src={hotel} alt="Hotel" style={imageStyle} />
      
      <div className="card" style={cardStyle}>
      <h1 className="text-center " style={{fontFamiy:'sans-serif',color:'orange',paddingTop:'30px',paddingBottom:'60px'}}>༺ <span style={{fontSize:'60px'}}>𝒜</span>𝓉𝓉𝒾𝒹𝑒 𝓡𝑜𝑜𝓂𝓈 ༺</h1>
        <div className="d-sm-flex">
        <div className="card-body " style={{backgroundColor:'rgba(0,0,0,0.8)',textAlign:'center',height:'400px',marginBottom:'20px'}}>
          <h5 className="card-title " style={{fontFamily:"sans-serif",color:'#cda05b',fontSize:'1.5em'}}>Attide</h5>
          <p className="card-text" style={{color:'#b4b1af'}}>
          We offer comfortable accommodations with all amenities and services to cater to business as well as leisure travelers available.Our rooms are designed for your comfort, equipped with modern conveniences, and provide a relaxing environment. Whether you're here for work or leisure, we strive to make your stay enjoyable.
          </p>
          <button type="button" className="btn btn-lg" style={buttonStyle}>Learn more</button>
        </div>
        <div className="card-body " style={{backgroundColor:'rgba(0,0,0,0.4)',marginLeft:'8px',textAlign:'center',height:'400px',marginBottom:'20px'}}>
          <h5 className="card-title " style={{fontFamily:"sans-serif",color:'#cda05b',fontSize:'1.5em'}}>Dining Experience</h5>
          <p className="card-text" style={{color:'#b4b1af'}}>
          Indulge in a culinary journey at Attide, where we offer a delectable selection of dishes to satisfy every palate. Our restaurant serves a blend of local and international cuisine, prepared with fresh ingredients and expert craftsmanship. our attentive staff is dedicated to providing a memorable dining experience.
          </p>
          <button type="button" className="btn btn-lg" style={buttonStyle}>Learn more</button>
        </div>
        <div className="card-body " style={{backgroundColor:'rgba(0,0,0,0.8)',marginLeft:'8px',textAlign:'center',height:'400px',marginBottom:'20px'}}>
          <h5 className="card-title " style={{fontFamily:"sans-serif",color:'#cda05b',fontSize:'1.5em'}}>Wellness and Recreation</h5>
          <p className="card-text" style={{color:'#b4b1af'}}>
          At Attide, we prioritize your well-being with our wellness and recreation offerings. Enjoy a rejuvenating experience at our fitness center equipped with modern exercise equipment. Unwind with a refreshing dip in our swimming pool or relax with a soothing spa treatment, ensuring a balanced and relaxing stay.
          </p>
          <button type="button" className="btn btn-lg" style={buttonStyle}>Learn more</button>
        </div>
        <div className="card-body " style={{backgroundColor:'rgba(0,0,0,0.4)',marginLeft:'5px',textAlign:'center',height:'400px'}}>
          <h5 className="card-title" style={{fontFamily:"sans-serif",color:'#cda05b',fontSize:'1.5em'}}>Attide Biz</h5>
          <p className="card-text" style={{color:'#b4b1af'}}>
          A boutique hotel that offers efficient, well equipped stays close to Bangalore airport for business trip requirements and can also cater to leisure travelers.
          Our commitment is to provide personalized services, modern amenities, and a comfortable environment to ensure a memorable stay for our guests.
          </p>
          <button type="button" className="btn btn-lg" style={buttonStyle}  >Learn more</button>
        </div>
       
      
        </div>
      </div>
      </div>

    
        <div className='container d-md-flex' style={{backgroundColor:'white',padding:'45px'}}>
            <div>
            <h1 style={{color:'#cda05b',fontSize:'50px'}}><span style={{fontStyle:'italic'}}>Our</span> Rooms & Suites </h1>
            </div>
            <div>
                <h5 style={{paddingLeft:'120px',color:'#7a7a7a'}}>Stays that will make staying worth it. </h5>
            </div>
        </div>

   

    <div className='container-fluid d-md-flex' style={{backgroundColor:'#f0ddc5',padding:'60px'}}>
            <div className="container">
            <h1 style={{color:'#cda05b',fontSize:'60px'}}><span style={{fontStyle:'italic'}}>special</span> Offers </h1>
            </div>
            <div className="container">
                <h2 style={{paddingLeft:'0px',color:'#30302e'}}>Get 20% off for Corporate Bookings </h2>
            </div>
        </div>


     
<div style={{backgroundColor:'#f0ddc5',paddingTop:'100px',paddingBottom:'100px'}}>
<div className=" container " >
    <div>
   <h1 style={{color:'orange'}}>We Are Reachable.</h1> 
<h3 style={{color:'skyblue'}}>Contact Availability</h3>
<p style={{color:'#7a7978'}}>We are always here to resolve your queries
Connect with us …</p>
<div style={{paddingBottom:'20px'}}>
    <i class="bi bi-whatsapp" style={{fontSize:'30px',paddingLeft:'5px',paddingRight:'15px',color:'#2e2e2d'}}></i>
<i class="bi bi-instagram" style={{fontSize:'30px',paddingRight:'15px',color:'#2e2e2d'}}></i>
<i class="bi bi-envelope" style={{fontSize:'30px',paddingRight:'15px',color:'#2e2e2d'}}></i>
<i class="bi bi-facebook" style={{fontSize:'30px',color:'#2e2e2d'}}></i>
</div>
    </div>
    <div >
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248723.84321479828!2d77.592507!3d13.079526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae183ec58b854b%3A0x958fe75bff0c6d8e!2sAttide%20Boutique%20Hotel!5e0!3m2!1sen!2sus!4v1703916550604!5m2!1sen!2sus" width="100%" height="500px" title="unique"></iframe>
    </div>
    
</div>

</div>






        <div>  
<img src={resort} alt="" width="100%" hei></img>
     </div>



    </div>
  );
};

export default Hotels;

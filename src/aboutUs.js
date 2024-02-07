import React from 'react';
import about from '../src/image/about.jpg';
import './aboutUs.css'; 
import about1 from '../src/image/about1.jpg';

const AboutUs = () => {
  return (
  <div>
    <div className="animate__animated animate__backInDown">
        <h1 style={{marginTop:'150px',marginBottom:'100px',textAlign:'center',color:'#e88420'}}>ABOUT US</h1>
    </div>
    <div className="d-md-flex container" style={{alignItems:'center',justifyContent:'center',marginBottom:'100px'}}>
      <div className="about1  animate__animated animate__backInUp">
        <h3 style={{color:'#eeee',textAlign:'center'}}>Our Story</h3>
        <p className="text-center" style={{paddingTop:'0px',color:'#bab8b8'}}>
        Our team has now grown into 6 directors, each heading their own department in the company. Swathi Group employs around 1000 people with a high rate of diversity in the company. Swathi group is currently one of the largest hospitality company in Bangalore and that is because we continue to strive to offer only the highest quality products and services to our customers.
        </p>

      </div>
      <div className="about2 animate__animated animate__backInUp" >
      <img src={about} alt="Restaurant" width="100%" className="backgroundImage" />
      </div>
    </div>

    <div className="d-md-flex container" style={{alignItems:'center',justifyContent:'center',marginTop:'100px',marginBottom:'50px'}}>
    <div className="about2 animate__animated animate__backInUp animate__delay-2s" >
      <img src={about1} alt="Restaurant" width="100%" className="backgroundImage" />
      </div>
      
      <div className="about1  animate__animated animate__backInUp animate__delay-2s">
        <h3 style={{color:'#eeee',textAlign:'center'}}>Our Mission</h3>
        <p className="text-center" style={{paddingTop:'0px',color:'#bab8b8'}}>
        Their mission was to create a Hospitality company which would cater to people from all segments of the society while providing them with a high-quality experience and value.They began with a simple idea: to start a Andhra Themed restaurant in the heart of banglore. Now, Swathi Group has totally 6 different brands that cater to different segments, spanning from Attide Boutique Hotel that serves to corporates and The Bunker that serves to the energetic youngsters of North Bangalore
        </p>

      </div>
     
    </div>
    
    </div>

  );
};

export default AboutUs;

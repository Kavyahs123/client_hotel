import React, { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import image1 from '../src/image/aboutUs1.jpg';
import image2 from '../src/image/room2.jpg';
import image3 from '../src/image/aboutUs2.jpg';

const Rooms = () => {
  // Sample data for rooms
  const rooms = [
    { title:'CLUB ROOM', imageUrl: image1, content: 'The Club Room is situated on a separate block of the hotel and offers a magnificent view of the gardens from its sit-out. The Club Room is ideal for upscale business travellers and provides the convenience of a room and the luxury of a suite.' },
    { title: 'DELUX ROOM', imageUrl: image3, content: 'This Room has a private sit-out overlooking our lush gardens & villas. The rooms are well appointed with all amenities that fills the discerning global business or leisure traveler needs.' },
    { title:'SUITE ROOM', imageUrl:image2, content: 'The Suite Room features a separate living and dining area. It comes with a large private terrace with a sit-out overlooking the lush green lawns and the shimmering water of the swimming pool.' },
  
  ];


  const cardsPerPage = 3;

  const totalSlides = Math.ceil(rooms.length / cardsPerPage);

 

  return (
    <div>
     
        {[...Array(totalSlides)].map((_, index) => {
          const startIndex = index * cardsPerPage;
          const endIndex = Math.min(startIndex + cardsPerPage, rooms.length);
          const roomSlice = rooms.slice(startIndex, endIndex);

          return (
           
              <div className="d-md-flex  pb-5" style={{justifyContent:"center"}} >
                {roomSlice.map(room => (
                  <Card className="m-2 cards" key={room.id} style={{ width: '21rem' ,boxShadow:'10px 10px 10px 10px rgba(0,0,0,0.2)',border:'2px solid white'}}>
                    <Card.Img variant="top" src={room.imageUrl} />
                    <Card.Body>
                      <Card.Title style={{textAlign:'center',fontFamily:'monospace',letterSpacing:'1px',color:"green"}}> {room.title}</Card.Title>
                      <Card.Text style={{textAlign:'center'}}>{room.content}</Card.Text>
                    </Card.Body>
                  </Card>
                  
                ))}
                
              </div>
         
          );
        })}
    </div>
  );
};

export default Rooms;

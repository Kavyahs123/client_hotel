import React from 'react';
import { Card} from 'react-bootstrap';
import aboutbg2 from '../src/image/aboutUs3.jpg';

export const DayOut = () => {
    const out = [
        { title:'INR 2000+Tax', imageUrl: aboutbg2, content: 'welcome Drink, Lavish Lunch Buffet, Hi Tea & Usage of Facilities' ,title1:'Facilities',content1:"Free access to swimming pool, indoor badminton court, Basketball,snooker, TT, squash, lawn tennis, kids outdoor & indoor play area",title2:"House rules",content2:"Kids above 3 will be charged @ 50%, swimming costumes for pool usage & noon marking shoes are mandatory for tennis & badminton",contact:"📞 8310241431 | 8277515721"},
        { title: 'INR 2500+Tax', imageUrl: aboutbg2, content: 'This Room has a private sit-out overlooking our lush gardens & villas. The rooms are well appointed with all amenities that fills the discerning global business or leisure traveler needs.',title1:'Facilities' ,content1:'Free access to swimming pool, indoor badminton court, Basketball,snooker, TT, squash, lawn tennis, kids outdoor & indoor play area',title2:"House rules",content2:'Kids above 3 will be charged @ 50%, swimming costumes for pool usage & noon marking shoes are mandatory for tennis & badminton',contact:"📞  8310241431 | 8277515721"},
        { title:'INR 4000+Tax', imageUrl:aboutbg2, content: 'The Suite Room features a separate living and dining area. It comes with a large private terrace with a sit-out overlooking the lush green lawns and the shimmering water of the swimming pool.',title1:'Facilities',content1:'Free access to swimming pool, indoor badminton court, Basketball,snooker, TT, squash, lawn tennis, kids outdoor & indoor play area' ,title2:'House rules',content2:'Kids above 3 will be charged @ 50%, swimming costumes for pool usage & noon marking shoes are mandatory for tennis & badminton',contact:"📞 8310241431 | 8277515721"},
      
      ];
      
  const cardsPerPage = 3;

  const totalSlides = Math.ceil(out.length / cardsPerPage);
  return (
    <div>
     
        {[...Array(totalSlides)].map((_, index) => {
          const startIndex = index * cardsPerPage;
          const endIndex = Math.min(startIndex + cardsPerPage, out.length);
          const roomSlice = out.slice(startIndex, endIndex);

          return (
            <>
            <h3 className="pt-5 text-center" style={{color:"orange"}}> ༺  𝒟𝒜𝒴𝒪𝒰𝒯 𝒫𝒜𝒞𝒦𝒜𝒢𝓔𝒮 ༺</h3>
              <div className="d-md-flex " style={{justifyContent:"center"}} >
               
                {roomSlice.map(room => (
                  <Card className="m-3 cards" key={room.id} style={{ width: '21rem' ,boxShadow:'10px 10px 10px 10px rgba(0,0,0,0.2)'}}>
                    <Card.Img variant="top" src={room.imageUrl} />
                    <Card.Body style={{backgroundColor:"#4B6F44"}}>
                      <Card.Title style={{textAlign:'center',fontFamily:'monospace',letterSpacing:'1px',color:"white"}}> {room.title}</Card.Title>
                      <Card.Text style={{textAlign:'center',color:"#eee"}}>{room.content}</Card.Text>
                      <Card.Title style={{textAlign:'center',fontFamily:'monospace',color:"white"}}>{room.title1}</Card.Title>
                      <Card.Text style={{textAlign:'center',color:"#eee"}}>{room.content1}</Card.Text>
                      <Card.Title style={{textAlign:'center',fontFamily:'monospace',color:"white"}}>{room.title2}</Card.Title>
                      <Card.Text style={{textAlign:'center',color:"#eee"}}>{room.content2}</Card.Text><br></br>
                      <Card.Text style={{textAlign:'center',color:"#eee"}}>{room.contact}</Card.Text>
                    </Card.Body>
                  </Card>
                  
                ))}
                
              </div>
              </>
         
          );
        })}
    </div>
    
  )
}

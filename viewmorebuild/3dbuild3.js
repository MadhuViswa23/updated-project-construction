import React, { useState } from "react";
import "./viewmorebuild.css"; 
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
export function Buildings() {
    const contentStyle = {
        marginLeft: '400px', 
                width: '100px',
        height: '500px',
    };

 
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="container1">
          <div className="image">
        {showVideo ? (
          <ReactPlayer
            url="https://youtu.be/ckFIeWsbTsg?si=-nJcobA2lcTUu_zm"
            controls
            width="500px"
            height="350px"
          />
        ) : (
            <img src="https://img2.cgtrader.com/items/861444/4e73869833/large/commercial-building-010-office-building-3d-model-max-obj-3ds-fbx-dwg-mtl.jpg"alt="Image" width="450" height="350" />
        )}
 {!showVideo && (
                <span className="play__icon"style={{ position: 'absolute', left: '250px', top: '400px' }}>
                  <i
                    class="<x-bi-play-circle "
                    onClick={() => setShowVideo(!showVideo)}
                    ></i>
                </span>
              )}
        
            
        
      
      </div>
     
      <div className="content1" style={contentStyle}>
        <h2>ESummit Square Towers
</h2>
        <p>
     Summit Square Towers is a luxurious residential complex nestled in the heart of the city. With its sleek modern design and breathtaking views of the surrounding skyline, it offers a lifestyle of sophistication and convenience. The towers boast a range of upscale amenities, from a state-of-the-art fitness center and spa to a stunning rooftop pool where residents can unwind while enjoying panoramic views. The meticulously designed living spaces feature high-end finishes, spacious layouts, and large windows that flood the rooms with natural light. Residents can indulge in the convenience of on-site concierge services, dedicated parking, and an array of entertainment options within walking distance. Summit Square Towers epitomizes urban living at its finest, combining elegance, comfort, and unparalleled convenience in one remarkable location. Location: Situated in the heart of the city's bustling downtown district, Summit Square Towers offers unparalleled convenience. Its central location provides easy access to business centers, entertainment venues, renowned restaurants, and cultural landmarks, making it an ideal choice for those seeking a vibrant urban lifestyle. Architecture & Design: The towers feature contemporary architecture that stands out amidst the cityscape. The sleek, sophisticated design is complemented by thoughtfully landscaped surroundings, creating a serene oasis within the lively city environment. Amenities: Summit Square Towers offers a comprehensive suite of amenities tailored to meet residents' needs and desires. These include: A state-of-the-art fitness center equipped with the latest exercise machines and spaces for yoga or group workouts. A luxurious spa for relaxation and rejuvenation, providing various treatments and therapies. A rooftop pool offering stunning views of the city skyline, accompanied by lounge areas for relaxation and social gatherings. Dedicated spaces for social events, gatherings, and entertainment purposes. Concierge services to assist residents with various needs, such as reservations, deliveries, and more. Secure and convenient parking facilities for residents and guests. Residences: The living spaces within Summit Square Towers are designed with meticulous attention to detail, offering: High-end finishes, fixtures, and materials throughout the apartments, creating an ambiance of luxury and comfort. Spacious layouts with ample natural light flowing through large windows, providing breathtaking views of the cityscape.. 
        </p>
        <Link to="/" className="btn btn-link mt-3" style={{ backgroundColor: '#03045e', color: '#ddd', textDecoration: 'none' , marginRight: '10px' }}>back</Link>
        <Link to="/getbyid/3" className="btn btn-link mt-3" style={{ backgroundColor: '#03045e', color: '#ddd', textDecoration: 'none' }}>Layouts</Link>
      </div>
    </div>
  );
}

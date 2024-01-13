import React, { useState } from "react";
import "./viewmorebuild.css"; 
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
export function Building() {
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
            url="https://youtu.be/CP6xetNWfQk?si=af9815Vvqto47Cdn"
            controls
            width="500px"
            height="350px"
          />
        ) : (
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-exterior-design-of-a-modern-house-in-the-city-a-3d-image_3606113.jpg" alt="Image" width="450" height="350" />
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
        <h2>Evergreen Towers</h2>
        <p>
       Evergreen towers are a fusion of innovative architectural design, advanced technology, and functionality aimed at providing comfortable living spaces. Here's a comprehensive description:

Architectural Design:
Modern 3D residential buildings showcase sleek, contemporary designs that prioritize aesthetics and functionality. Clean lines, geometric shapes, and a minimalist approach often define these structures. Architects emphasize open spaces, large windows for natural light, and sustainable materials to create eco-friendly homes.

Innovative Features:
These buildings integrate cutting-edge technologies and smart features. They might include energy-efficient systems, home automation, advanced security measures, and eco-friendly solutions like solar panels or rainwater harvesting systems.

Amenities:
To enhance residents' lifestyles, modern 3D residential buildings often feature a range of amenities. These could include fitness centers, swimming pools, communal areas, rooftop gardens, entertainment rooms, and co-working spaces.

Environmental Considerations:
Sustainability is a key focus in modern designs. Buildings are often designed to reduce environmental impact by employing eco-friendly materials, energy-efficient systems, and green spaces that promote a healthier environment.

Community Spaces:
Developers often include communal areas to encourage social interaction among residents. These spaces can foster a sense of community, offering places for gatherings, events, or recreational activities.

Comfort and Functionality:
Inside the units, emphasis is placed on functionality without compromising comfort. Ergonomic designs, optimal space utilization, and high-quality finishes contribute to a comfortable living experience.


Customization and Personalization:
Developers might offer customizable options, allowing residents to personalize certain aspects of their living spaces, such as layouts or finishes, to suit their preferences.

Overall, modern 3D residential buildings epitomize a blend of contemporary aesthetics, sustainable living, technological integration, and community-centric design, catering to the evolving needs and preferences of residents. 
        </p>
        <Link to="/" className="btn btn-link mt-3" style={{ backgroundColor: '#03045e', color: '#ddd', textDecoration: 'none' , marginRight: '10px' }}>back</Link>
        <Link to="/getbyid/2" className="btn btn-link mt-3" style={{ backgroundColor: '#03045e', color: '#ddd', textDecoration: 'none' }}>Layouts</Link>
      </div>
    </div>
  );
}

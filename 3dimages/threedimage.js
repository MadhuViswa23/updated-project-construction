// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import courseImg1 from "../assetsimages/ui.jpg";
// import courseImg2 from "../assetsimages/ui2.jpg";
// import courseImg3 from "../assetsimages/ui.jpg";
// //import courseImg1 from "../assetsimages/ui/side-view-happy-people-applauding-colleague_23-2149411509.jpg";
// import "./courses.css";
// import CourseCard from "./CourseCard";

// const coursesData = [
//   {
    
//     title: "title",
//     lesson: 12,
//     students: 12.5,
//     rating: 5.9,
//     imgUrl: courseImg1,
//     enrollLink: "/enroll/01",
//     viewMoreLink: "/viewmore/01", // Replace "/viewmore/01" with the view more link for this course
//   },
//   {
//     id: "02",
//     title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
//     lesson: 12,
//     students: 12.5,
//     rating: 5.9,
//     imgUrl: courseImg2,
//     enrollLink: "/enroll/02",
//     viewMoreLink: "/viewmore/02", // Replace "/viewmore/02" with the view more link for this course
//   },
//   {
//     id: "03",
//     title: "UI/UX BootCamp for Beginners in 2022, Adobe XD, Figma",
//     lesson: 12,
//     students: 12.5,
//     rating: 5.9,
//     imgUrl: courseImg3,
//     enrollLink: "/enroll/03",
//     viewMoreLink: "/viewmore/03", // Replace "/viewmore/03" with the view more link for this course
//   },
// ];


// const Courses = () => {
 
//   return (
//     <section id = "c">
//       <Container>
//         <Row>
//           <Col lg="12" className="mb-5">
//             <div className="course__top d-flex justify-content-between align-items-center">
//               <div className="course__top__left w-50">
//                 <h2>Our Popular Courses</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
//                   consequatur libero quod voluptatibus ullam quia quas, vitae
//                   voluptatem recusandae reprehenderit!
//                 </p>
            
//               </div>

//               <div className="w-50 text-end">
//                 <button className="btn " class ="bt">See All</button>
                
//               </div>
//             </div>

            
//           </Col>
//           {coursesData.map((item) => (
//             <Col lg="4" md="6" sm="6">
//               <CourseCard key={item.id} item={item} />
//             </Col>
//           ))}
      
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Courses;
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Courses = () => {
//   const [getdata, setGetdata] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3005/getalll")
//       .then((res) => res.json())
//       .then((data) => setGetdata(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []); // Added an empty dependency array to trigger the effect only on mount

//   // const del = (id) => {
//   //   var key = { id: id };
//   //   axios.post('http://localhost:3006/delete', key)
//   //     .then((response, error) => {
//   //       if (error) {
//   //         alert("Data are not removed");
//   //       } else if (response.data.status === "deleted") {
//   //         alert("Data is deleted successfully");
//   //       }
//   //     })
//   //     .catch((error) => console.error('Error deleting data:', error));
//   // };

//   return (
//     <section id="c">
//       {getdata.map((value, index) => (
//         <div key={index}>
//           <h1 className="text-dark">Serial number: {index + 1}</h1>
//           <h1 className="text-info"></h1>
//           <h2 className="text-warning">lesson: {value.lesson}</h2>
//           <h2 className="text-warning">students: {value.students}</h2>
//           <h2 className="text-warning">rating: {value.rating}</h2>
          
       
//           <hr />
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Courses;
import * as React from 'react';
import './threedimage.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Construction from '../header/headconstruction';

export default function Threedimage() {


  const [getdata, setGetdata] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3005/getall3d')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setGetdata(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
 

  return (
  
   <>
  
   <section
      id="c"
      style={{ display: 'flex', flexWrap: 'wrap', margin: '50px', gap: '30px' }}
    >
      {getdata.map((value, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <Card sx={{ maxWidth: 345 , backgroundColor:' #03045e' , color: 'white', width: '300px'}}>
         
      <CardActionArea>
      <CardMedia
  component="img"
  height="140"
  image={value.image}
  alt="Course Image"
 
/>
    
  
              <CardContent>
             
                <Typography gutterBottom variant="h5" component="div">
             Title: {value.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                description: {value.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
      Location: {value.location} | Status: {value.status} | Date: {value.date}
      <i className='fa fa-star'></i>
    </Typography>
               
               
    <Link to={`/viewmore/${value.id}`} className='box-iconm' style={{ textDecoration: 'none', gap:'30px' }}>View More</Link>
<Link to="/" className='box-iconmm' style={{ textDecoration: 'none' }}>Back</Link>
              
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </section>
   </>
  );
}

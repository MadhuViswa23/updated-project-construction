// import React from 'react'
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// export function Update(){
    
//     const {id}=useParams()
//     const[title, setTitle]=useState('')
//     const[lesson, setLesson] = useState('')
//     const[students, setStudents] = useState('')
//     const[rating, setRating] = useState('')

//     useEffect(()=>{
//         fetch("http://localhost:3006/getupdate/"+id)
//         .then(res=>res.json())
//         .then((data)=>{
//             setTitle(data[0].title)
//            setLesson(data[0].lesson)
//            setStudents(data[0].students)
//            setRating(data[0].rating)
//     })
//     },[])
//     const updated=(event)=>{
//         event.preventDefault();
//         var title = document.getElementById("title").value;
//         var lesson= document.getElementById("lesson").value;
//         var students = document.getElementById("students").value;
//         var rating = document.getElementById("rating").value;
       
    
//         var data = {
//           "title" : title,
//           "lesson" : lesson,
//           "students" : students,
//           "rating" : rating
//         }
        
    
//         if (title === "") {
//           alert("Please enter the title");
//         }
//         else if(lesson === ""){
//             alert("Please enter the lesson");
//         } 
//         else if (students === "") {
//           alert("Please enter the students");
//         } 
//         else if (rating === "") {
//           alert("Please enter the rating");
//         }
//     else{
//         axios.put('http://localhost:3005/update/'+id,data)
//         .then((res)=>{
//             if(res.data.status==="error"){
//                 alert("Data are not updated")
//             }
//             else if(res.data.status==="updated"){
//                 alert("Data are updated successfully")
//             }
//         })
//     }
// }

//     return(
//         <>
//         <div className="container mt-5">
//       <center>
//         <h3 className="mb-9">update</h3>
//         <form onSubmit={updated} style={{ border: '1px solid #ccc', width: '300px', padding: '20px' }}>
//           {/* <input type="text" id="title" name="title" required placeholder="Enter book title" value={title} onChange={(change)=>{setTitle(change.target.value)}}/><br />
//           <input type="text" id="category" name="category" placeholder="Enter category name" value={category} onChange={(change)=>{setCategory(change.target.value)}} /><br />
//           <input type="text" id="author" name="author" placeholder="Enter author's name" value={author}  onChange={(change)=>{setAuthor(change.target.value)}} /><br />
//           <input type="number" id="publishedyear" name="publishedyear" min="0" value={publishedyear} placeholder="Enter published year"  onChange={(change)=>{setPublishedyear(change.target.value)}} /><br />
//           <input type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(change)=>{setPassword(change.target.value)}} /><br />
//           <input type="email" name="email" id="email" placeholder="Enter your email" value={email}  onChange={(change)=>{setEmail(change.target.value)}} /><br />
//           <button className='btn btn-dark' type="submit">Submit</button> */}

// <input type="text" id="title" name="title" required placeholder="Enter title" value={title} onChange={(change)=>{setTitle(change.target.value)}}/><br />
// <input type='text'  id='lesson' name='lesson' required placeholder='enter lesson' value={lesson} onChange={(change)=>{setLesson(change.target.value)}}/><br/>
// <input type='text'  id='students' name='students' required placeholder='enter students' value={students} onChange={(change)=>{setStudents(change.target.value)}}/><br/>
// <input type='text'  id='rating' name='rating' required placeholder='enter rating' value={rating} onChange={(change)=>{setRating(change.target.value)}}/><br/>
              
                           
//                     <button className='btn btn-dark' type="submit">Submit</button> 
                  
                    

//         </form>
//       </center>
//     </div>
//         </>
//     );
// }
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Construction from '../header/headconstruction';

export function Updatebuildd() {
  
    const { id } = useParams();
    const [image, setImage] = useState('');
    const [layoutimage, setLayoutimage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');


    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3005/getupdate/${id}`)
                .then(res => res.json())
                .then(data => {
                    setImage(data[0].image);
                    setLayoutimage(data[0].layoutimage);
                    setName(data[0].name);
                    setDescription(data[0].description);
                    setLocation(data[0].location);
                    setStatus(data[0].status);
                    setDate(data[0].date);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [id]);
    const updatedbuild = (event) => {
        event.preventDefault();
        var image = document.getElementById("image").value;
        var layoutimage= document.getElementById("layoutimage").value;
        var name = document.getElementById("name").value;
        var description = document.getElementById("description").value;
        var location = document.getElementById("location").value;
        var status = document.getElementById("status").value;
        var date = document.getElementById("date").value;
        var data = {
            "image":image,
            "layoutimage": layoutimage,
          "name": name,
          "description": description,
          "location": location,
          "status" : status,
          "date": date,
            
          }
          if(image ===""){
            alert("Image is required!");
          }
          else if(layoutimage ===""){
            alert("layoutImage is required!");
          }
          else if (name === "") {
            alert("Please enter the name");
          }
          
          else if(description ===""){
            alert("Please enter the description")
          }
          else if(location ===""){
            alert("Please enter the location")
          }
          else if(status ===""){
            alert("Please enter the status")
          }
          else if(date ===""){
              alert("Please enter the date")
            } else {
          axios.put('http://localhost:3005/updatebuild/'+id,data)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data are not updated");
                    } else if (res.data.status === "updated") {
                        alert("Data are updated successfully");
                    }
                });
        }
    };
    

    return (
       <>
       <Construction/>
       
       
       <div className="container mt-5">
        <center>
          <h3 className="mb-9">UPDATE projects</h3>
          <form onSubmit={updatedbuild } style={{ width: '800px', padding: '20px', margin: '20px', float: 'right' }}>
            <div className="row">
              <div className="col-md-6">
              <input
                  type="text"
                  id="image"
                  name="image"
                  required
                  placeholder="image"
                  className="form-control mb-3"
                  style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
                  value={image} onChange={(change) => { setImage(change.target.value) }} 
                />
                <input
                  type="text"
                  id="layoutimage"
                  name="layoutimage"
                  required
                  placeholder="layoutimage"
                  className="form-control mb-3"
                  style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
                  value={layoutimage} onChange={(change) => { setLayoutimage(change.target.value) }} 
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  className="form-control mb-3"
                  style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
                  value={name} onChange={(change) => {setName(change.target.value)}}
                />   <input
                type="description"
                id="description"
                name="description"
                required
                placeholder="description"
                className="form-control mb-3"
                style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
                value={description} onChange={(change) => { setDescription(change.target.value) }} 
              />
             
                
               
              
              </div>
              <div className="col-md-6">
              <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  placeholder="location"
                  className="form-control mb-3"
                  value={location} onChange={(change) => { setLocation(change.target.value) }} 
                />
                <input
                  type="text"
                  id="status"
                  name="status"
                  required
                  placeholder="status"
                  className="form-control mb-3"
                  value={status} onChange={(change) => { setStatus(change.target.value) }} 
                 
                />
               
               <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="estimateddate"
                  required
                  className="form-control mb-3"
                  value={date} onChange={(change) => {setDate(change.target.value)}}
                 
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">UPDATE</button>
          </form>
        </center>
      </div>
       </>
    );
}

import React from "react";
import axios from "axios";
import Construction from "../header/headconstruction";


export default function Insertionimage() {
   
  function inserting3d(event) {
    event.preventDefault();
    var image = document.getElementById("image").value;
    var layoutimage = document.getElementById("layoutimage").value;
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;
    var status = document.getElementById("status").value;
    var date  = document.getElementById("date").value;
 
  
    var data = {
      "image":image,
      "layoutimage" : layoutimage,
    "name": name,
    "description": description,
    "location": location,
    "status" : status,
    "date": date,
      
    }
    if(image ===""){
      alert("Image is required!");
    }
    else if(layoutimage===""){
        alert("layoutimage is required");
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
      }
    else {
      axios.post("http://localhost:3005/insert3d",data)
        .then((response,error)=>{
          if(error){
            alert("Data are not inserted")
          }
          else  if(response.data.status==="inserted"){
            alert("Data are inserted successfully")
            window.location.href="/viewall3d"
          }
        })
    }
  }

  return (
    <div>
        <Construction/>
      <div className="container mt-5">
        <center>
          <h3 className="mb-9">ADD more projects</h3>
          <form onSubmit={inserting3d} style={{ width: '800px', padding: '20px', margin: '20px', float: 'right' }}>
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
                  
                />
                 <input
                  type="text"
                  id="layoutimage"
                  name="layoutimage"
                  required
                  placeholder="layoutimage"
                  className="form-control mb-3"
                  style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
                  
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  className="form-control mb-3"
                  style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
                  
                />   <input
                type="description"
                id="description"
                name="description"
                required
                placeholder="description"
                className="form-control mb-3"
                style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
             
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
                  style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
            
                />
                <input
                  type="text"
                  id="status"
                  name="status"
                  required
                  placeholder="status"
                  className="form-control mb-3"
                  style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
                 
                />
               
               <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="estimateddate"
                  required
                  className="form-control mb-3"
                  style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
                 
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </center>
      </div>
    </div>
  );
}

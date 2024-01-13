import React from "react"
import axios from "axios";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
 import { Link } from "react-router-dom";

export function Getone(){
    
    const { id } = useParams();
    const [getdata, setGetdata] = useState([]);
  
    useEffect(() => {
      axios
      .get(`http://localhost:3005/getbyid/${id}`)
        .then((res) => setGetdata(res.data))
        .catch((error) => console.error(error));
    }, [id]);
  
   
   
    return(
        <>
           <section
  id="layoutimage"
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '60px',
    gap: '50px',
  }}
>
  <h1 style={{ color: '#blue', fontSize: '2rem' }}>VISWA CONSTRUCTIONS</h1>
  {getdata.map((value, index) => (
    <div key={index} style={{ margin: '10px',  boxShadow: '0 4px 8px rgba(22, 30, 61, 0.9)'}}>
      <div className="card" style={{ maxWidth: '600px', width: '800px' }}>
        <img
          src={value.layoutimage}
          className="card-img-top"
          alt="Course Image"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-dark" style={{ fontSize: '20px' }}>
            DESCRIPTION: {value.description}
          </h6>
          <Link to="/layout" className=" btn btn-link mt-3"  style={{ backgroundColor: '#03045e', color: '#ddd', textDecoration: 'none' , marginRight: '10px' }}> view more Layouts</Link>
          <Link to="/" className=" btn btn-link mt-3" style={{ backgroundColor: '#03045e', color: '#ddd',textDecoration: 'none'  }}>back to dashboard</Link>
        </div>
      </div>
    </div>
  ))}
</section>


        </>
    )
}
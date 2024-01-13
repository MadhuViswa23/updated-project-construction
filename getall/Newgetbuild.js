
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Newgetbuild() {
  const [getdata, setGetdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/getall3d")
      .then((res) => res.json())
      .then((data) => setGetdata(data));
  }, []);

  const del = (id) => {
    var key = { id: id };
    axios.post("http://localhost:3005/delete3d", key).then((response, error) => {
      if (error) {
        alert("Data are not removed");
      } else if (response.data.status === "deleted") {
        alert("Data is deleted successfully");
      }
    });
  };

  return (
<table className="table" style={{ backgroundColor: '#833bf7' }}>
      <thead>
        <tr>
          <th>SN0</th>
          <th>IMAGE</th>
          <th>LayoutIMAGE</th>
          <th>NAME</th>
          <th>DESCRIPTION</th>
          <th>LOCATION</th>
          <th>STATUS</th>
          <th>DATE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {getdata.map((value, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td style={{ width: '100px', height: '100px' }}>
  <img src={value.image} alt={value.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</td>
<td style={{ width: '100px', height: '100px' }}>
  <img src={value.layoutimage} alt={value.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</td>
            <td>{value.name}</td>
            <td style={{ width: '100px', height: '100px' }}>{value.description}</td>
            <td>{value.location}</td>
            <td>{value.status}</td>
            <td>{value.date}</td>
            <td>
            <Link to={`/update/${value.id}`}>
  <button className="btn btn-success btn-sm">Update</button>
</Link>

<button
  className="btn btn-danger text-white btn-sm"
  style={{ margin: '0 5px' }} 
  onClick={() => {
    del(value.id);
  }}
>
  Delete
</button>

<Link to="/" className="btn btn-dark text-white btn-sm">
  back
</Link>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

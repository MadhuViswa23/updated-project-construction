import React from 'react';
import './dashboard.css'; 
import '@fortawesome/fontawesome-free/css/all.css';
import Construction from '../header/headconstruction';



class Dashboard extends React.Component {
  render() {
    return (
      <div className='madhu'>
        {/* <div id="mySidenav" className="sidenav">
          <p className="logo">
            <span>Viswa Construction</span>
          </p>
          <a href="#" className="icon-a">
            <i className="fa fa-dashboard icons"></i> Dashboard
          </a>
          <a href="/customer" className="icon-a">
            <i className="fa fa-users icons"></i> site camera
          </a>
          <a href="/view" className="icon-a">
            <i className="fa fa-list icons"></i> Layouts
          </a>
          <a href="/insertimage" className="icon-a">
            <i className="fa fa-shopping-bag icons"></i> Insert 
          </a>
          <a href="/" className="icon-a">
            <i className="fa fa-tasks icons"></i> 3D Image
          </a>
          <a href="#" className="icon-a">
            <i className="fa fa-user icons"></i> Update
          </a>
          <a href="#" className="icon-a">
            <i className="fa fa-list-alt icons"></i> Tasks
          </a>
        </div> */}
<Construction/>
        <div id="main">
          <div className="head">
            <div className="col-div-6">
              <span style={{  position: 'fixed',
    top: '5px', // Adjust this value to set the distance from the top
    left: '350px',fontSize: '30px', cursor: 'pointer', color:'black' }} className="nav">
                ☰ Dashboard
              </span>
             
            </div>

            <div className="col-div-6">
              <div className="profile" style={{color: 'black', position: 'fixed',
    top: '5px', 
    left: '800px',}}>
                
                <p style={{color: 'black', position: 'fixed',
    top: '5px', 
    left: '800px',}}>
               <span style={{color: 'black', position: 'fixed',
    top: '40px', 
    left: '880px',}}></span>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="clearfix"></div>
          <br />

          <div className="col-div-3">
            <div className="box">
              <p>
                67
                <br />
                <span>Customers</span>
              </p>
              <i className="fa fa-users box-icon"></i>
            </div>
          </div>
          <div className="col-div-3">
            <div className="box">
              <p>
                88
                <br />
                <span>Projects</span>
              </p>
              <i className="fa fa-list box-icon"></i>
            </div>
          </div>
          <div className="col-div-3">
            <div className="box">
              <p>
                99
                <br />
                <span>Orders</span>
              </p>
              <i className="fa fa-shopping-bag box-icon"></i>
            </div>
          </div>
          <div className="col-div-3">
            <div className="box">
              <p>
                78
                <br />
                <span>Tasks</span>
              </p>
              <i className="fa fa-tasks box-icon"></i>
            </div>
          </div>
          <div className="clearfix"></div>
          <br />
          <br />
          <div className="col-div-4">
            <div className="box-4">
              <div className="content-box">
                <p>
                  Total Sale
                </p>

                <div className="circle-wrap">
                  <div className="circle">
                    <div className="mask full">
                      <div className="fill"></div>
                    </div>
                    <div className="mask half">
                      <div className="fill"></div>
                    </div>
                    <div className="inside-circle"> 87% </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-div-8">
            <div className="box-8">
              <div className="content-box">
                <p>
                  Top Selling Projects
                </p>
                <br />
                <table>
                  <tr>
                  <th>Project Name</th>
            <th>Client</th>
            <th>Location</th>
            <th>Status</th>
                  </tr>
                  <tr>
                  <td>Construction of Residential Tower</td>
            <td>ABC Corporation</td>
            <td>New York</td>
            <td>Ongoing</td>
                  </tr>
                  <tr>
                  <td>Renovation of Office Building</td>
            <td>XYZ Enterprises</td>
            <td>Los Angeles</td>
            <td>Completed</td>
                  </tr>
                  <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                  </tr>
                 
                </table>

                
              </div>
            </div>
          </div>

          

          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
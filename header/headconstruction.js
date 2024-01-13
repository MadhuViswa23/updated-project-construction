import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './headconstruct.css';

export default function Construction() {
   
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={4} lg={3} xl={2}>
          <div
            id="mySidenav"
            className="sidenav"
            style={{ height: "100vh"}}
          >
            <p className="logo">
              <span>Viswa Construction</span>
            </p>
            <a href="/" className="icon-a">
              <i className="fa fa-dashboard icons"></i> Dashboard
            </a>
            <a href="/layout" className="icon-a">
              <i className="fa fa-users icons"></i> Layouts
            </a>
            <a href="/viewall3d" className="icon-a">
              <i className="fa fa-list icons"></i>viewall buildings 
            </a>
            <a href="/insertimage" className="icon-a">
              <i className="fa fa-shopping-bag icons"></i> Insert 3dimage
            </a>
            <a href="/threedimage" className="icon-a">
              <i className="fa fa-tasks icons"></i> site images
            </a>
            <a href="/update/:id" className="icon-a">
              <i className="fa fa-user icons"></i> Update
            </a>
            <a href="/view" className="icon-a">
              <i className="fa fa-list-alt icons"></i> Tasks
            </a>
          </div>
        </Col>
        <Col sm={12} md={8} lg={9} xl={10}>
          <div id="main">
            <div className="head">
              <div className="col-div-6">
               
              </div>
            
            </div>
          
          </div>
        </Col>
      </Row>
    </Container>
  );
}

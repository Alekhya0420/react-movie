import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white border border-secondary py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>Best website for buying quality rare books and movies with good quality and low price</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>123 Mallik lane</p>
            <p>Kolkata city,Ananya</p>
            <p>Email: example@example.com</p>
            <p>Phone:7989898989</p>
          </Col>
          <Col md={4} className="mb-3">
              <p><a href="#" className="me-3 text-white">Facebook</a></p>
              <p><a href="#" className="me-3 text-white">Twitter</a></p>
              <p><a href="#" className='text-white'>Instagram</a></p>
            
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

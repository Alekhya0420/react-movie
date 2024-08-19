import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
    <Navbar expand="lg" className="bg-dark">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home-page" className='fs-4 text-white'>Home</Nav.Link>
            <Nav.Link as={Link} to="/" className='fs-4 text-white'>Registration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default Header
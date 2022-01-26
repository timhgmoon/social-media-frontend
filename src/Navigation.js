import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignIn from './routes/SignIn';

const Navigation = () => {

  return(
    <>
    <Navbar className="px-2" bg="light" variant="light" fixed="top">
        <Navbar.Brand href="/">Title TBD</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">New Post</Nav.Link>
          <Nav.Link href="/">Profile</Nav.Link>
          <Nav.Link href="/">Settings</Nav.Link>
          <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
        </Nav>

    </Navbar>
    </>
  
  )
}

export default Navigation;
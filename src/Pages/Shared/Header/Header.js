import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark " sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            {' '}
            <Nav.Link href="/home#home">
              <img src={logo} alt="" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/home#home">Home</Nav.Link>
            <Nav.Link href="/home#services">Services</Nav.Link>
            <Nav.Link href="/home#doctors">Doctors</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Navbar.Text>
              Hlw: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

import logoIconWhite from '../../assets/images/logo-icon-white.png';
import { Nav } from 'react-bootstrap';

function HomeMenu() {
  return (
    <>
      <Navbar expand="lg" sticky="top" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Love & Lavish Logo"
              src={logoIconWhite}
              width="100"
              height="100"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="home-menu-nav" />
          <Navbar.Collapse id="home-menu-nav">
            <Nav className="me-auto">
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              <Nav.Link href="/booking">Booking</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Logn</Nav.Link>
              <Nav.Link href="/register">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default HomeMenu;
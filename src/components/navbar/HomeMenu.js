import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, Nav } from 'react-bootstrap';

import logoIconWhite from '../../assets/images/logo-icon-white.png';
import { getAuthToken } from '../../services/auth';
import { requestAuthLogout } from '../../actions/authActions';

function HomeMenu() {
  const token = getAuthToken();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleOnLogOut = () => {
    dispatch(requestAuthLogout(
      () => navigate(pathname)
    ));
  }

  return (
    <>
      <Navbar expand="lg" sticky="top" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            {/* <img
              alt="Love & Lavish Logo"
              src={logoIconWhite}
              width="100"
              height="100"
            /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="home-menu-nav" />
          <Navbar.Collapse id="home-menu-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Logo</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/dashboard/booking">Booking</Nav.Link>
              <Nav.Link href="/dashboard/profile">Profile</Nav.Link>
            </Nav>
            {token
              ? (
                <Nav>
                  <Nav.Link href="/dashboard/profile">Logged In</Nav.Link>
                  <Form className="d-flex">
                    <Button
                      variant="outline-danger"
                      onClick={() => handleOnLogOut()}
                    >
                      Log Out
                    </Button>
                  </Form>
                </Nav>
              )
              : (
                <Nav>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Sign Up</Nav.Link>
                </Nav>
              )
            }
          </Navbar.Collapse>
        </Container>
      </Navbar >
      <Outlet />
    </>
  );
}

export default HomeMenu;
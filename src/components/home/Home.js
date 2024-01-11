import { Col, Container, Row } from "react-bootstrap";

import './Home.css';
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h1>React Authentication Tutorial</h1>

                    <section id="navigation">
                        <a href="/">Home</a>
                        <a href="/contact-us">Contact Us</a>
                        <a href="/about-us">About Us</a>
                        <a href="/gallery">Gallery</a>
                        <a href="/dashboard">Dashboard</a>
                    </section>
                </Col>
            </Row>
            <Outlet />
        </Container>
    );
}

export default Home;
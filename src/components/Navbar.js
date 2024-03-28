import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";


const CustomNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container>
                <Navbar.Brand as={Link} to="/">MyVenue</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">דף הבית</Nav.Link>
                        <Nav.Link as={Link} to="/venues">אולמות האירועים</Nav.Link>
                        <Nav.Link as={Link} to="/login">התחברות</Nav.Link>
                        <Nav.Link as={Link} to="/register">הרשמה</Nav.Link>
                        <Nav.Link as={Link} to="/about">קצת עלינו</Nav.Link>
                        <Nav.Link as={Link} to="/contact">צור קשר</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default CustomNavbar;

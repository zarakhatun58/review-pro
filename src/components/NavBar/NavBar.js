import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "yellow"
    }
    const style = {
        color: "white",
        textDecoration: "none"
    }
    return (
        <div>
            <Navbar className="bg-nav" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Our Code Education</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-links" href="/home">
                            <NavLink style={style} activeStyle={activeStyle}  to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link className="nav-links" href="/services">
                            <NavLink style={style} activeStyle={activeStyle} to="/services">Services</NavLink>
                        </Nav.Link>
                        <Nav.Link className="nav-links" href="/about">
                            <NavLink style={style} activeStyle={activeStyle} to="/about">About</NavLink>
                        </Nav.Link>
                        <Nav.Link className="nav-links" href="/contact">
                            <NavLink style={style} activeStyle={activeStyle} to="/contact">Contact</NavLink>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavBar;
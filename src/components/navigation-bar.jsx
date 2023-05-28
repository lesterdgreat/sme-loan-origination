import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

export default function NavigationBar() {
    const aeon_logo = require('../assets/aeon-logo.svg');
    return (
        <Navbar className="color-nav" sticky="top" variant="light" expand="md">
            <Container>
                <Navbar.Brand href="/"><img src={aeon_logo} alt="Loan Origination System"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/sme-loan-origination/"><h5 className="linkText">Home</h5></Nav.Link>
                        <Nav.Link href="/sme-loan-origination/scanner"><h5 className="linkText">Scanner</h5></Nav.Link>
                        <Nav.Link href="/sme-loan-origination/dataentry"><h5 className="linkText">Data Entry</h5></Nav.Link>
                        <Nav.Link href="/sme-loan-origination/verification"><h5 className="linkText">Verification</h5></Nav.Link>
                        <Nav.Link href="/sme-loan-origination/assessment"><h5 className="linkText">Assessment</h5></Nav.Link>
                        <NavDropdown className="linkText" title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Manage Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Configuration</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
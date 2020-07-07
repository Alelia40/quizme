import React from 'react';
import './header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
export function Header() {
    return (
        <nav id="wrapper">
            <h1>QuizMe</h1>
            <ul className="nav-list">
                <li className="nav-item"><a>Home</a></li>
                <li className="nav-item"><a>Manage</a></li>
            </ul>
        </nav>
    )
}
*/

export function Header() {
    return (
        <Navbar id="wrapper" expand="md" variant="dark">
            <Navbar.Brand id="nav-brand">QuizMe</Navbar.Brand>
            <Navbar.Toggle aria-controls="nav" id="nav-toggle" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/manage" className="nav-link">Manage</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
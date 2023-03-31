import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Income Tax Calculator</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;

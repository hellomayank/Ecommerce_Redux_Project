import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/" style={{ color: "white" }}>Fashion Shoppee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto ">
                            <Nav.Link href="/" style={{ color: "white" }}>Home</Nav.Link>
                            <Nav.Link href="/about" style={{ color: "white" }}>About Us</Nav.Link>
                            <Nav.Link href="/contactUs" style={{ color: "white" }}>Contact Us</Nav.Link>
                        </Nav>
                        <a href='/cart'>
                            <img src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg" alt="cart_image" style={{
                                width: "25px"
                            }} ></img>
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
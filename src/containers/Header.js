import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Fashion Shoppee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                        </Nav>
                        <a href='/cart'>
                            <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="cart_image" style={{
                                width: "25px"
                            }}></img>
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
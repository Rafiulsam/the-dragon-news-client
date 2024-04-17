import React from 'react';
import logo from '../../../src/assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} className='img-fluid' alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p className='text-secondary fw-semibold fs-4'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-body-secondary'>
                <Button variant='danger'>Latest</Button>
                <Marquee speed={80} gradient gradientWidth={80}>
                    I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center'> 
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
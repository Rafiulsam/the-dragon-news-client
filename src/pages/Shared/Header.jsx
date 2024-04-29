import React, { useContext } from 'react';
import logo from '../../../src/assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
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
                        <Nav className="mx-auto d-flex gap-4">
                            <Link className='text-decoration-none text-secondary' to={'/category/0'}>Home</Link>
                            <Link to={'/about'} className='text-decoration-none text-secondary'>About</Link>
                            <Link to={'/career'} className='text-decoration-none text-secondary'>Career</Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            {user ? <><Nav.Link ><FaUserCircle style={{ fontSize: '2rem' }} /> </Nav.Link><Button onClick={handleLogOut} variant="dark">Logout</Button></> : <Button variant="dark"><Link className='text-decoration-none text-white' to={'/login'}>Login</Link></Button>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
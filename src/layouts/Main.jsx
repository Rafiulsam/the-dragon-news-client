import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer'
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav';
import RightNav from '../pages/Shared/RightNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='mt-5'>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav/>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;
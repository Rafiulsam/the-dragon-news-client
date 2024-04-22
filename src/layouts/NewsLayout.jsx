import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer'
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
             <Header />
            <Container>
                <Row>
                    <Col lg={9}>
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

export default NewsLayout;
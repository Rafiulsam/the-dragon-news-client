import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer'
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav';
import RightNav from '../pages/Shared/RightNav';

const Main = () => {
    return (
        <div className='mt-5'>
            <Header />
            <Container>
                <Row>
                    <Col sm={3}>
                        <LeftNav/>
                    </Col>
                    <Col sm={6}>Main content is coming</Col>
                    <Col sm={3}>
                        <RightNav/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;
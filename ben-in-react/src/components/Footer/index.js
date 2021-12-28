import React from 'react';
import Icons from '../Icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container>
      <Container fluid bg='light' variant='light' className='p-5 light'>
        <Row>
          <Col sm={12} md={6} className='d-flex justify-content-center'>
            <p className='footer'>© 2021 Made with love and care by Ben Kaan</p>
          </Col>

          <Col
            sm={12}
            md={6}
            className='d-flex justify-content-md-end justify-content-center '
          >
            <Icons />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;

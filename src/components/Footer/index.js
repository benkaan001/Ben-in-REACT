import React from 'react';
import Icons from '../Icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container>
      <Container fluid bg='light' variant='light' className='p-5 light'>
        <Row className='footer'>
          <Col sm={12} md={6} className='d-flex justify-content-center'>
            <p>© 2021 Built with love by Ben</p>
          </Col>

          <Col
            sm={12}
            md={6}
            className='d-flex justify-content-md-end justify-content-center  '
          >
            <Icons />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;

import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <Container className='bg-light p-3 footer'>
      <Row>
        <p className='m-md-0 copyright'>
          © 2021 Made with love and care by Ben Kaan
        </p>
      </Row>
    </Container>
  );
};

export default Footer;

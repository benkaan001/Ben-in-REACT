import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <>
      <Container fluid className='mb-0 jumbotron'>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4} className='justify-content-center'>
              <Image
                src={require('../assets/IMG_6484.jpg')}
                thumbnail

                // width='200vw'
                // height='200vw'
              />
            </Col>
            <Col className='pl-md-5'>
              <h1 className='display-4 text-center text-lg-left  p-0-lg pt-4'>
                hello!
              </h1>
              <p className='text-dark text-center text-md-left h3'>
                I'm Ben Kaan, a full-stack developer currently in Austin, TX.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className=''>
        <Container className='p-5 about'>
          <h3>About Me</h3>
          <p>Professional background</p>
          <p>Web development journey</p>
          <p>Something Personal for more click here</p>
        </Container>
      </Container>
    </>
  );
};
export default About;

import React from 'react';
import Typewriter from 'typewriter-effect';
import GetToKnowMe from '../components/GetToKnowMe';

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
                rounded
                width='70%'
              />
            </Col>
            <Col className='pl-md-5 text-center'>
              <h1 className='display-4 text-center text-lg-left  p-0-lg pt-4'>
                Hello!
              </h1>
              <h3 className='text-dark text-center text-md-left'>
                I'm BEN, a full-stack developer,
              </h3>

              <Typewriter
                options={{
                  strings: [
                    '<h3>based in Austin, TX</h3>',
                    '<h3>world-traveler, learner, </h3>',
                    '<h3> adventurist,</h3>',
                    '<h3> and hardworker.</h3>',
                  ],
                  deleteSpeed: 10,
                  autoStart: true,
                  loop: true,
                  cursor: '>',
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className=''>
        <Container className='p-5 about'>
          <GetToKnowMe />
        </Container>
      </Container>
    </>
  );
};
export default About;

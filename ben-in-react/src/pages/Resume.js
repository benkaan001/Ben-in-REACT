import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

const Resume = () => {
  return (
    <>
      <Container fluid className='p-5 mb-0 shadow'>
        <Container className='text-center'>
          <div className='p-md-5'>
            <h1>
              Skills <span>&amp;</span> Experience
            </h1>
          </div>
        </Container>
      </Container>

      <Container className='py-5 d-flex flex-column flex-md-row justify-content-center align-items-center'>
        <Button
          href='https://github.com/benkaan001/Ben-in-REACT'
          target='_blank'
          rel='noopener noreferrer'
        >
          View My Resume
        </Button>
      </Container>

      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h3 className='text-center'>Frontend Skills</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>MORE....</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h3 className='text-center'>Backend Skills</h3>
                <ul>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>RESTful APIs</li>
                  <li>MongoDB, Mongoose</li>
                  <li>SQL</li>
                  <li>MySQL, Sequelize</li>
                  <li>GraphQL</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Row>
        {/* <h1>Days I coded in 2021</h1> */}
        <p className='text-dark text-center text-md-left h3'>Days I coded</p>
      </Row>
      <Row>
        <Image src={require('../assets/github.png')} fluid />
      </Row>
    </>
  );
};
export default Resume;

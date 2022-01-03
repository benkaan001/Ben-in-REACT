import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GitHubCalendar from 'react-github-calendar';

const Resume = () => {
  return (
    <>
      <Container fluid className='p-5 mb-0 shadow jumbotron'>
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
          href='https://benkaan001.github.io/portfolioChallenge/assets/Ben%20Kaan%20Resume.html'
          target='_blank'
          rel='noopener noreferrer'
          className='btn'
        >
          View My Resume
        </Button>
      </Container>

      <Container className='justify-content-center mt-4'>
        <Row className='mb-3'>
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
                  {/* <li>MORE....</li> */}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mb-3'>
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
        <Row className='mb-3'>
          <Col>
            <Card>
              <Card.Body>
                <h3 className='text-center'>Days I coded</h3>
                <div className='justify-content-center'>
                  <GitHubCalendar username='benkaan001' />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Resume;

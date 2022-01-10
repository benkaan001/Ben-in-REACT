import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GitHubCalendar from 'react-github-calendar';

import './Resume.css';

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

      <Container>
        <Row>
          <Col>
            <div class='skills-card'>
              <div class='skills-card-side skills-card-front'>
                <div class='skills-card-info'>
                  <h4 className='mt-4 text-center'>Frontend Skills</h4>
                  <div className='skills-card-img'>
                    <img
                      src='https://img.icons8.com/external-soft-fill-juicy-fish/50/000000/external-css-coding-and-development-soft-fill-soft-fill-juicy-fish.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/000000/external-javascript-is-a-high-level-interpreted-programming-language-logo-shadow-tal-revivo.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/ios-filled/50/000000/html-5--v1.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/wired/100/000000/react.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/color/50/000000/bootstrap.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/color/50/000000/sass.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/wired/100/000000/api-settings.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>

              <div class='skills-card-side skills-card-back'>
                <button class='btn'>frontEnd skils</button>
              </div>
            </div>
          </Col>
          <Col>
            <div class='skills-card'>
              <div class='skills-card-side skills-card-front'>
                <div class='skills-card-info'>
                  <h4 className='mt-4 text-center'>Backend Skills</h4>

                  <img
                    src='https://img.icons8.com/color/100/000000/nodejs.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/external-tal-revivo-filled-tal-revivo/50/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-filled-tal-revivo.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/windows/50/000000/npm.png'
                    alt=''
                  />

                  <img
                    src='https://img.icons8.com/color/100/000000/express.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/color/50/000000/heroku.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/fluency-systems-regular/50/000000/mysql.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/color/50/000000/graphql.png'
                    alt=''
                  />

                  <img
                    src='https://img.icons8.com/wired/50/000000/postman-api.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/ios/50/000000/api.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/ios/50/000000/redux.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/color/50/000000/java-web-token.png'
                    alt=''
                  />
                </div>
              </div>

              <div class='skills-card-side skills-card-back'>
                <button class='btn'>backend skils</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='justify-content-center mt-4'>
        {/* <Row className='mb-3'>
          <Col>
            <Card.Body>
              <h3 className='text-center'>Frontend Skills</h3>
            </Card.Body>
          </Col>
        </Row> */}

        {/* <Row className='mb-3'>
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
        </Row> */}
        <Row className=''>
          <Col>
            <Card>
              <Card.Body className='mt-4 justify-content-center'>
                <h4 className='text-center p-4 mt-4'>Days I coded</h4>
                <div className='p-4'>
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

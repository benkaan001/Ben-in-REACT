import React from 'react';
import ContactForm from '../components/ContactForm';
import { BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  return (
    <>
      <Container fluid className='p-5 mb-2 jumbotron'>
        <Container className='p-md-4 text-center'>
          <h1>Get in Touch</h1>
        </Container>
      </Container>

      <Container fluid className='shadow bg-light mb-4'>
        <Container className='p-4'>
          <Row>
            <Col>
              <Container>
                <h4>Contact Info</h4>
                <p>
                  <BsEnvelope /> benkaan001@gmail.com
                </p>
                <p>
                  <BsGithub /> benkaan001
                </p>
                <p>
                  <BsLinkedin /> ben-kaan
                </p>
              </Container>
            </Col>
            <Col sm={12} md={6} lg={8} className='pt-sm-4 pt-lg-0'>
              <Container>
                <h4>Send a Message</h4>

                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Contact;

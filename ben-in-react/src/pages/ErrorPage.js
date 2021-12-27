import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import errorPic from '../assets/error.jpg';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const ErrorPage = () => {
  return (
    <>
      <Container className='p-5 h-100'>
        <Card>
          <Card.Body className='text-center m-5'>
            <Card.Title>
              <h2>Oops, that page does not exist...</h2>
            </Card.Title>
            <Card.Img src={errorPic} />
            <Card.Text className='mt-5'>
              <LinkContainer to='/about'>
                <a> Back to main page</a>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ErrorPage;

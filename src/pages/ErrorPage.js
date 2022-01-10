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
          <div className='error-body'>
            <Card.Body className='text-center m-5'>
              <Card.Title>
                <h3>Oops, that page does not exist...</h3>
              </Card.Title>
              <Card.Img src={errorPic} />
              <Card.Text className='mt-5'>
                <LinkContainer to='/about'>
                  <a href='/#' className='error'>
                    {' '}
                    Back to main page
                  </a>
                </LinkContainer>
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default ErrorPage;

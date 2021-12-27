import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const HomePage = (props) => {
  const [redirect, setRedirect] = useState(false);

  const typeHandler = async () => {
    window.setTimeout(() => {
      setRedirect(true);
    });
    window.setTimeout(() => {
      props.history.push('/about');
    }, 1000);
  };
  return (
    <>
      <Container>
        <Container fluid className='p-0 mb-0 jumbotron'>
          <Container className='p-md-3 text-center typewriter'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString('> Hello, world!')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('> meetBen();')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('> Redirecting you to ...')
                  .callFunction(() => typeHandler())
                  .start();
              }}
            />
          </Container>
        </Container>

        <Container>
          <Image
            src={require('../assets/project.JPG')}
            thumbnail
            width='3300vw'
            height='3300vw'
          />
        </Container>
      </Container>
    </>
  );
};

export default HomePage;

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
    });
  };
  return (
    <>
      <Container fluid className='jumbotron'>
        <Container fluid className='text-center typewriter'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString('>  const meetBen = () => ...in 5,4,3,2,1 ')
                // .pauseFor(300)
                // .deleteChars(14)
                // .typeString(
                //   '> I just want to say quick thanks for stopping by '
                // )
                // .deleteAll(1)

                // .typeString('> before I take you to the main page in 5,4,3,2,1')
                .callFunction(() => typeHandler())
                .start();
            }}
          />
        </Container>

        <Container className='text-center m'>
          <Image src={require('../assets/project.JPG')} rounded width='50%' />
        </Container>
      </Container>
    </>
  );
};

export default HomePage;

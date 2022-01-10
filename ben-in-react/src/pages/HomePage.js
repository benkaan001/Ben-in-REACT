import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

import Container from 'react-bootstrap/Container';

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
      <Container>
        <header className='hero'>
          <div className='section-center hero-center'>
            <article className='hero-info'>
              <h1>Hello there! 👋🏻</h1>
              <div className='Typewriter'>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .typeString('<h4> taking you to home page in 3,2,1 </h4>')

                      .callFunction(() => typeHandler())
                      .start();
                  }}
                />
              </div>
            </article>
            <article className='hero-img'>
              <img
                src={require('../assets/project.JPG')}
                className='hero-photo'
                alt='ben kaan'
              />
            </article>
          </div>
        </header>
      </Container>
    </>
  );
};

export default HomePage;

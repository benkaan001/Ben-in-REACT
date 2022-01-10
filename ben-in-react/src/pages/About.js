import React from 'react';
import Typewriter from 'typewriter-effect';
import GetToKnowMe from '../components/GetToKnowMe';

import Container from 'react-bootstrap/Container';

import './About.css';

const About = () => {
  return (
    <>
      <Container>
        <header class='hero'>
          <div class='section-center hero-center'>
            <article class='hero-info'>
              <div class='underline'></div>
              <h1>I'm Ben</h1>
              <h4>Fullstack Web Developer</h4>
              <Typewriter
                options={{
                  strings: [
                    '<h4>based in Austin, TX,</h4>',
                    '<h4>world-traveler, </h4>',
                    '<h4>learner,</h4>',
                    '<h4>adventurer.</h4>',
                  ],
                  cursor: '-',
                  deleteSpeed: 10,
                  autoStart: true,
                  loop: true,
                }}
              />
            </article>
            <article class='hero-img'>
              <img
                src={require('../assets/IMG_6484.jpg')}
                class='hero-photo'
                alt='ben kaan'
              />
            </article>
          </div>
        </header>
      </Container>

      <Container fluid className=''>
        <Container fluid className='p-5 about'>
          <GetToKnowMe />
        </Container>
      </Container>
    </>
  );
};
export default About;

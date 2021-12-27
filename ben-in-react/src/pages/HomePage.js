import React from 'react';
import Typewriter from 'typewriter-effect';

const HomePage = () => {
  return (
    <div className='App'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .typeString('Hello World!')
            .pauseFor(1000)
            .changeDeleteSpeed(100)
            .deleteAll()
            .typeString('meetBen();')
            .pauseFor(1000)

            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default HomePage;

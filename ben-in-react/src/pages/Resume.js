import React from 'react';

import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const Resume = () => {
  return (
    <>
      <Row>
        {/* <h1>Days I coded in 2021</h1> */}
        <p className='text-dark text-center text-md-left h3'>Days I coded</p>
      </Row>
      <Row>
        <Image src={require('../assets/github.png')} fluid />
      </Row>
    </>
  );
};
export default Resume;

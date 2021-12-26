import React from 'react';
import Icons from '../../pages/Icons';

import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' className='bg-light shadow'>
        <LinkContainer to='/'>
          <Navbar.Brand>Ben Kaan</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/about'>
              <Nav.Link>About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/projects'>
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to='resume'>
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to='contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <div className=''>
            {Icons.map((link) => {
              const { id, url, icon } = link;
              return (
                <a
                  key={id}
                  target='_blank'
                  className='m-3'
                  href={url}
                  rel='nooper noreferrer'
                >
                  {icon}{' '}
                </a>
              );
            })}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;

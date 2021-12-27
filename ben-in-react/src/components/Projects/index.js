import React from 'react';

import Card from 'react-bootstrap/Card';
import { BsGithub } from 'react-icons/bs';

const Projects = ({ project }) => {
  return (
    <>
      <Card className='m-lg-4 m-2 d-flex justify-content-center'>
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <a href={project.page} target='_blank' rel='noopener noreferrer'>
              <h4>{project.title}</h4>
            </a>
            <a href={project.repo} target='_blank' rel='noopener noreferrer'>
              <BsGithub />
            </a>
          </Card.Title>
          <Card.Subtitle>{project.description}</Card.Subtitle>
          <a href={project.page} target='_blank' rel='noopener noreferrer'>
            <Card.Img src={project.img} className='pt-4' />
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default Projects;

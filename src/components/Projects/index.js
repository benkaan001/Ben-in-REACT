import React from 'react';

import Card from 'react-bootstrap/Card';
import { BsGithub } from 'react-icons/bs';

const Projects = ({ project }) => {
  return (
    <Card className='m-lg-4  d-flex justify-content-center '>
      <Card.Body className=' justify-content-between project-card-body'>
        <Card.Title className='d-flex justify-content-between '>
          <a
            href={project.page}
            target='_blank'
            rel='noopener noreferrer'
            className='project-title'
          >
            <h4 className='project-title'>{project.title}</h4>
          </a>
          <a href={project.repo} target='_blank' rel='noopener noreferrer'>
            <BsGithub className='links' />
          </a>
        </Card.Title>
        <Card.Subtitle>{project.description}</Card.Subtitle>
        <a href={project.page} target='_blank' rel='noopener noreferrer'>
          <Card.Img src={project.img} className='pt-4' />
        </a>
      </Card.Body>
    </Card>
  );
};

export default Projects;

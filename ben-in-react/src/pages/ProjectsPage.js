import React from 'react';
import Projects from '../components/Projects';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import projectImage from '../assets/project.JPG';

const ProjectItems = [
  {
    id: 0,
    title: 'Run Buddy',
    description: 'Landing Page',
    img: projectImage,
    repo: 'https://github.com/benkaan001/run-buddy-too',
    page: 'https://github.com/benkaan001/run-buddy-too',
  },
  {
    id: 1,
    title: 'Run Buddy',
    description: 'Landing Page',
    img: projectImage,
    repo: 'https://github.com/benkaan001/run-buddy-too',
    page: 'https://github.com/benkaan001/run-buddy-too',
  },
  {
    id: 2,
    title: 'Run Buddy',
    description: 'Landing Page',
    img: projectImage,
    repo: 'https://github.com/benkaan001/run-buddy-too',
    page: 'https://github.com/benkaan001/run-buddy-too',
  },
  {
    id: 3,
    title: 'Run Buddy',
    description: 'Landing Page',
    img: projectImage,
    repo: 'https://github.com/benkaan001/run-buddy-too',
    page: 'https://github.com/benkaan001/run-buddy-too',
  },
  {
    id: 4,
    title: 'Run Buddy',
    description: 'Landing Page',
    img: projectImage,
    repo: 'https://github.com/benkaan001/run-buddy-too',
    page: 'https://github.com/benkaan001/run-buddy-too',
  },
  {
    id: 5,
    title: 'Run Buddy',
    description: 'Landing Page',
    img: projectImage,
    repo: 'https://github.com/benkaan001/run-buddy-too',
    page: 'https://github.com/benkaan001/run-buddy-too',
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Container fluid className='p-5 mb-0 shadow'>
        <Container className='text-center p-md-5'>
          <h1>Projects</h1>
        </Container>
      </Container>

      <Container className='p-3'>
        <Row>
          {ProjectItems.map((projectItem) => {
            return (
              <Col s={12} lg={6} key={projectItem.key}>
                <Projects project={projectItem} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProjectsPage;

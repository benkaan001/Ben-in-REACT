import React from 'react';
import Projects from '../components/Projects';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// import projectImage from '../assets/project.JPG';
import haloImage from '../assets/HALO-UI-desktop.gif';
// import tinyReactProjectsImage from '../assets/calorie-content.gif';
import financialAdvisorApiImage from '../assets/financial-advisor-API.gif';
import liteBudgetImage from '../assets/lite-budget.gif';
import photoFetchImage from '../assets/photoFetch4.gif';
import letsBlogThatImage from '../assets/letsBlogThat.png';
import bookThrillImage from '../assets/book-thrill copy.gif';

const ProjectItems = [
  {
    id: 0,
    title: 'Halo',
    description: 'Test-driven MERN application featuring GraphQL Apollo JWT ',
    img: haloImage,
    repo: 'https://github.com/benkaan001/gym-joy',
    page: 'https://sleepy-ocean-28624.herokuapp.com/',
  },
  {
    id: 1,
    title: 'Photo Fetch-V2',
    description:
      'A backend applicaiton featuring Express-session-based user authentication, MySQL, and fetch API on the frontend.',
    img: photoFetchImage,
    repo: 'https://github.com/benkaan001/photoFetch-V2',
    page: 'https://afternoon-coast-77459.herokuapp.com/',
  },
  {
    id: 2,
    title: "Let's Blog That",
    description:
      'Full-stack blog application featuring MySQL-Squelize and an MVC architectural layout',
    img: letsBlogThatImage,
    repo: 'https://github.com/benkaan001/lets-blog-that',
    page: 'https://lit-cove-65977.herokuapp.com/',
  },
  {
    id: 3,
    title: 'Financial Advisor API',
    description:
      'An API that utilizes JWT, bcryptjs, custom error handling, and several data security npm libraries to help manage prospective clients for a financial advisor.',
    img: financialAdvisorApiImage,
    repo: 'https://github.com/benkaan001/JWT-FinancialAdvisorAPI',
    page: 'https://financial-advisor-api.herokuapp.com/api-docs/#/',
  },
  {
    id: 4,
    title: 'Book-Thrill-with-GraphQL',
    description:
      'Full-stack MERN application featuring Apollo Server GraphQL library and GraphQL APIs',
    img: bookThrillImage,
    repo: 'https://github.com/benkaan001/book-thrill-GraphQL',
    page: 'https://quiet-headland-56636.herokuapp.com/',
  },

  {
    id: 5,
    title: 'Lite Budget PWA',
    description:
      'Progressive Web Application(PWA) providing users with offline functionality utilizing MongoDB as its database.',
    img: liteBudgetImage,
    repo: 'https://github.com/benkaan001/lite-budget-PWA',
    page: 'https://dry-citadel-07916.herokuapp.com/',
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Container fluid className='p-5 mb-0 shadow jumbotron'>
        <Container className='text-center p-md-5'>
          <h1>Projects</h1>
        </Container>
      </Container>

      <Container className='p-5'>
        <Row className='justify-content-md-center p-3'>
          {ProjectItems.map((projectItem) => {
            return (
              <Col s={12} lg={6} key={projectItem.id}>
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

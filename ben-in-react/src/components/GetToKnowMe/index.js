import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import './GetToKnowMe.css';

const getToKnowMe = [
  {
    id: '101',
    order: 1,
    title: 'Hello and Welcome!',
    dates: 'Jul 2021 - Present',
    responsibilities: [
      'Thank you for stopping by! This is my first React Application. It is certainly not perfect - as you may tell from the weird location of the blinking cursor above.😅',
      'As a former perfectionist, who always strived for and somehow managed to achieve that 4.0 GPA or the Top Performer/Employee of the Year Award(s), this is one of the most difficult yet greatest things that coding has taught me. ',
      'I am most certainly not there yet; however, like my coding skills, I am getting better at it - EVERY DAY, which has been the key ingredient in all of my success stories that I will eloborate on in Part II.',
    ],
    company: 'PART I',
  },
  {
    id: '102',
    order: 2,
    title: 'The Power of Consistency',
    dates: 'Nov 2020 - Present',
    responsibilities: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
    ],
    company: 'PART II',
  },
  {
    id: '103',
    order: 3,
    title: 'Exciting Future',
    dates: 'Jul 2011 - Nov 2020',
    responsibilities: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
    ],
    company: 'PART II',
  },
];

const GetToKnowMe = () => {
  const [jobs, setJobs] = useState(getToKnowMe);
  const [value, setValue] = useState(0);

  const { company, dates, responsibilities, title } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        {/* <h2>experience</h2> */}
        {/* <div className='underline'></div> */}
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          {/* <h4>{company}</h4> */}
          <p className='job-date'>{dates}</p>
          {responsibilities.map((responsibility, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon' />
                <p>{responsibility}</p>
              </div>
            );
          })}
        </article>
      </div>
      {/* <button className='btn' type='button'>
        more info
      </button> */}
    </section>
  );
};

export default GetToKnowMe;

import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import './GetToKnowMe.css';

const getToKnowMe = [
  {
    id: '101',
    order: 1,
    title: 'Full Stack Web Developer',
    dates: 'Jul 2021 - Present',
    responsibilities: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
    ],
    company: 'UNIVERSITY OF TEXAS',
  },
  {
    id: '102',
    order: 2,
    title: 'Self Employed',
    dates: 'Nov 2020 - Present',
    responsibilities: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
    ],
    company: 'SELF-EMPLOYED',
  },
  {
    id: '103',
    order: 3,
    title: 'Branch Manager',
    dates: 'Jul 2011 - Nov 2020',
    responsibilities: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum minus harum accusantium sed fugiat eligendi sequi necessitatibus corrupti. Minus iste nobis soluta, nulla at hic cupiditate earum magnam sapiente?',
    ],
    company: 'JPMC',
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
          <h4>{company}</h4>
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
      <button className='btn' type='button'>
        more info
      </button>
    </section>
  );
};

export default GetToKnowMe;

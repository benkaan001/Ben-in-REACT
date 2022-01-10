import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import './GetToKnowMe.css';

const getToKnowMe = [
  {
    id: '101',
    order: 1,
    title: 'Hello and Welcome!',
    dates: 'Present',
    responsibilities: [
      'Thank you for stopping by! This is my first React Application! It is far from perfect! ',
      'As a former perfectionist, who always found a way to graduate with a 4.0 GPA or get the Top Performer/Employee of the Year Award(s), accepting imperfectionism is one of the most difficult yet greatest things that programming has taught me. ',
      'I am not there yet; however, like my JavaScript skills, I am getting better at it every day.',
      'If you have time, check out Part II and III! ',
    ],
    company: 'PART I',
  },
  {
    id: '102',
    order: 2,
    title: 'The Power of Consistency',
    dates: 'Past',
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
    dates: 'Future',
    responsibilities: [
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
    <>
      <section className='getToKnowMe-section'>
        <div className='title'></div>
        <div className='words-center'>
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
      </section>
    </>
  );
};

export default GetToKnowMe;

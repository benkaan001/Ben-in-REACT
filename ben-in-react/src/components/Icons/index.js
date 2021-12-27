import React from 'react';

import {
  BsFillCloudFog2Fill,
  BsGithub,
  BsLinkedin,
  BsEnvelope,
} from 'react-icons/bs';

const Icons = () => {
  const iconsArray = [
    {
      id: 0,
      url: 'mailto:benkaan001@gmail.com',
      logo: <BsEnvelope />,
    },
    {
      id: 1,
      url: 'https://github.com/benkaan001',
      logo: <BsGithub />,
    },
    {
      id: 2,
      url: 'https://www.linkedin.com/in/benatakaan/',
      logo: <BsLinkedin />,
    },
    {
      id: 3,
      url: 'https://soundcloud.com/user-965913027',
      logo: <BsFillCloudFog2Fill />,
    },
  ];

  return (
    <>
      <div>
        {iconsArray.map((icon) => {
          const { id, url, logo } = icon;
          return (
            <a
              key={id}
              target='_blank'
              className='m-4 '
              href={url}
              rel='nooper noreferrer'
            >
              <span>{logo}</span>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Icons;

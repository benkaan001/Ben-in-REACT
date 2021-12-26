import React from 'react';

import {
  BsFillCloudFog2Fill,
  BsGithub,
  BsLinkedin,
  BsEnvelope,
} from 'react-icons/bs';

const Icons = [
  {
    id: 0,
    url: 'mailto:benkaan001@gmail.com',
    icon: <BsEnvelope />,
  },
  {
    id: 1,
    url: 'https://github.com/benkaan001',
    icon: <BsGithub />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/benatakaan/',
    icon: <BsLinkedin />,
  },
  {
    id: 3,
    url: 'https://soundcloud.com/user-965913027',
    icon: <BsFillCloudFog2Fill />,
  },
];

export default Icons;

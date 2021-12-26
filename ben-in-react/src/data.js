import React from 'react';
import { FaGithubAlt, FaLinkedin, FaSoundcloud } from 'react-icons/fa';
export const navLinks = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/resume',
    text: 'resume',
  },
  {
    id: 5,
    url: '/contact',
    text: 'contact',
  },
];

export const socialIcons = [
  {
    id: 1,
    url: 'https://github.com/benkaan001',
    icon: <FaGithubAlt />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/benatakaan/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://soundcloud.com/user-965913027',
    icon: <FaSoundcloud />,
  },
];

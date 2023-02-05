interface Project {
  name: string
  description: string
  image: string
  github: string
  link: string
}

interface NavItem {
  label: string
  page: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Secret Santa',
    description:
      'A Secret Santa event creator built with React, allowing for hassle-free gifter assignments and invite sharing.',
    image: '/elfco-secret-santa.png',
    github: 'https://github.com/HartJN/elfco-secret-santa-only',
    link: 'https://elfco-secret-santa.herokuapp.com',
  },
  {
    name: 'Badger Match',
    description:
      "An animal companion finding application. We'll show you different candidates to help you decide which animal is your ideal match.",
    image: '/badgermatch.png',
    github: 'https://github.com/HartJN/BadgerMatch',
    link: '#',
  },
  {
    name: 'TechTok',
    description:
      'TechTok is a social media application that allows users to post and comment on tech-related content. Built using Typescript, Next.js, Sanity.io.',
    image: '/tech-tok.png',
    github: '#',
    link: '#',
  },
  {
    name: 'Forkify',
    description:
      'Forkify is a recipe search application that allows users to search for recipes and save them to their favorites. Built using OOP JavaScript and MVC architecture.',
    image: '/forkify.png',
    github: 'https://github.com/HartJN/Forkify',
    link: '#',
  },
  {
    name: 'Mapty',
    description:
      'Mapty is a workout tracking application that allows users to track their workouts and save them to their favorites. Built using OOP JavaScript and MVC architecture.',
    image: '/mapty.png',
    github: 'https://github.com/HartJN/Mapty',
    link: '#',
  },
]

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
]

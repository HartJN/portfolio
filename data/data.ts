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
    name: 'TechTok',
    description:
      'TechTok is a social media application that allows users to post and comment on tech-related content. Built using Typescript, Next.js, Sanity.io.',
    image: '/tech-tok.png',
    github: 'https://github.com/HartJN/techtok',
    link: 'https://techtok.vercel.app',
  },
  {
    name: 'Hart Solutions',
    description:
      'Hart Solutions is a website that provides software solutions for businesses. It is built using React, Typescript and TailwindCSS to create a modern, responsive interface.',
    image: '/hart-solutions.png',
    github: 'https://github.com/HartJN/Hart-Solutions',
    link: 'https://hart-solutions.vercel.app/',
  },
  {
    name: 'Badger Match',
    description:
      "An animal companion finding application. We'll show you different candidates to help you decide which animal is your ideal match.",
    image: '/badgermatch.png',
    github: 'https://github.com/HartJN/Badger-Match',
    link: '#',
  },
  {
    name: 'Personal Blog',
    description:
      'A static blog created during my time at Dev Academy. Features articles on core human skills and reflections. Showcases my HTML, CSS, and JavaScript skills, as well as my view on topics such as growth mindset.',
    image: '/blog.png',
    github: 'https://github.com/HartJN/HartJN.github.io',
    link: 'https://hartjn.github.io',
  },

  {
    name: 'Forkify',
    description:
      'Forkify is a recipe search application that allows users to search for recipes and save them to their favorites. Built using OOP JavaScript and MVC architecture.',
    image: '/forkify.png',
    github: 'https://github.com/HartJN/Forkify',
    link: 'https://forkify-hartjn.netlify.app/',
  },
  {
    name: 'Mapty',
    description:
      'Mapty is a workout tracking application that allows users to track their workouts and save them to their favorites. Built using OOP JavaScript and MVC architecture.',
    image: '/mapty.png',
    github: 'https://github.com/HartJN/Mapty',
    link: 'https://mapty-hartjn.netlify.app',
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

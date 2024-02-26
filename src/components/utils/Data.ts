import {
  Gamepad2,
  ShoppingBag,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Movix App',
    techStack: 'Next.js, Redux, Redux-Toolkit, React Hook Form, Tailwind Css',
    imageUrl: 'movix.png',
    href: 'https://movix-hazel-three.vercel.app/',
  },
  {
    id: 2,
    title: 'Ecomerce App',
    techStack: 'React, React Hook Form, Tailwind Css',
    imageUrl: 'ecomerce.jpeg',
    href: 'https://github.com/Jagdishsinghdhami/ecommerce_app',
  },
  {
    id: 3,
    title: 'Portfolio',
    techStack: 'React, Typescript, TailwindCss,React Hook Form',
    imageUrl: 'portfolio.png',
    href: 'https://portfolio-three-brown-84.vercel.app/',
  },
  // {
  //   id: 3,
  //   title: 'Todo LIst',
  //   techStack: 'React, React Hook Form, Tailwind Css',
  //   imageUrl: 'todoImg.jpg',
  //   href: 'https://github.com/Jagdishsinghdhami/react_todo_with_localstorage',
  // },
  {
    id: 4,
    title: 'Blog App',
    techStack: 'React, Vite, React Hook Form, Appwrite',
    imageUrl: 'blogApp.jpg',
    href: 'https://github.com/Jagdishsinghdhami/blog_project',
  },
  // {
  //   id: 5,
  //   title: 'Spotify Clone',
  //   techStack:
  //     'Next.js 13, React Hook Form, Zustand, Radix UI, Typescript, Tailwind CSS',
  //   imageUrl: 'spotify-clone.gif',
  //   href: 'https://github.com/Jagdishsinghdhami/spotify-clone',
  // },
  // {
  //   id: 4,
  //   title: 'Amazon Clone',
  //   techStack:
  //     'NodeJs, Express, Mongoose, Next.js 13, Next Auth, React Hook Form, Typescript, Tailwind CSS',
  //   imageUrl: 'amazon-clone.jpeg',
  //   href: 'https://github.com/nwaliaez/eCommerce',
  // },
  // {
  //   id: 5,
  //   title: ' DALL·E Clone',
  //   techStack: 'OpenAI, Nodejs, Express, Mongoose, ReactJS, Tailwind CSS',
  //   imageUrl: 'dalle-clone.webp',
  //   href: 'https://github.com/nwaliaez/dalleClone',
  // },
];

export const moreProjects = [
  {
    id: 1,
    title: 'Todo App',
    techStack: 'React, LocalStorage, Tailwind css, React hook, Reducer',
    icon: 'shirt',
    href: 'https://github.com/Jagdishsinghdhami/react_todo_with_localstorage',
  },
  {
    id: 2,
    title: 'Add To Cart',
    techStack: 'React, Redux',
    icon: 'lottery',
    href: 'https://github.com/Jagdishsinghdhami/addToCart',
  },
  {
    id: 3,
    title: 'React Projects ',
    techStack: 'ReactJs, Tailwind css, Redux, React hook',
    icon: 'share',
    href: 'https://github.com/Jagdishsinghdhami/react_course',
  },

  {
    id: 4,
    title: 'portfolio',
    techStack: 'Next.js 13, Tailwind CSS, Typescript',
    icon: 'game',
    href: 'https://github.com/Jagdishsinghdhami/portfolio',
  },
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'HTML, CSS',
    src: '/tech/frontend/htmlcss.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Tailwind',
    src: '/tech/frontend/tailwind.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'Javascript, Typescript',
    src: '/tech/frontend/jsts.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: 'Reactjs',
    src: '/tech/frontend/reactjs.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'Nextjs 13',
    src: '/tech/frontend/nextjs13.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'NodeJs',
    src: '/tech/backend/nodejs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'ExpressJs',
    src: '/tech/backend/express.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'DenoJs',
    src: '/tech/backend/denojs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
  {
    id: 4,
    title: 'Next Auth',
    src: '/tech/backend/nextauth.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 5,
    title: 'PHP',
    src: '/tech/backend/php.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MySQL',
    src: '/tech/database/mysql.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'MongoDB',
    src: '/tech/database/mongo.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'Redis',
    src: '/tech/database/redis.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 4,
    title: 'PostgreSQL',
    src: '/tech/database/postgres.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Elastic Search',
    src: '/tech/database/elasticSearch.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Docker',
    src: '/tech/devops/docker.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'Kubernetes',
    src: '/tech/devops/k8s.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'GIT',
    src: '/tech/devops/git.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 4,
    title: 'Jenkins',
    src: '/tech/devops/jenkins.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Terraform',
    src: '/tech/devops/terraform.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
];

export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: 'ET MsmeConclave 2023',
    src: '/tech/web3/msmeConclave.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
    href:'https://economictimes.indiatimes.com/spotlight/et_msmeconclave/105718752.cms',
  },
  {
    id: 2,
    title: 'ET MsmeAwards 2023',
    src: '/tech/web3/msmeAwards.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
    href:'https://economictimes.indiatimes.com/spotlight/et_msmeawards2023.cms',
  },
  {
    id: 3,
    title: 'ET Hackathon',
    src: '/tech/web3/hkthon.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
    href:'https://economictimes.indiatimes.com/spotlight/et_hackathon_home/101017726.cms',
  },
  {
    id: 4,
    title: 'ET Soonicorns 2023',
    src: '/tech/web3/soonicorns.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
    href:'https://economictimes.indiatimes.com/spotlight/et_soonicorns.cms',
  },
  {
    id: 5,
    title: 'ET Campusstar 2023',
    src: '/tech/web3/campusstar.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
    href:'https://economictimes.indiatimes.com/spotlight/et_campusstar2022.cms',
  },
  {
    id: 6,
    title: 'ET Career Day 2023',
    src: '/tech/web3/careerDay.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
    href:'https://economictimes.indiatimes.com/spotlight/et_careerday2023.cms',
  },
  {
    id: 7,
    title: 'ET Brookfield 2023',
    src: '/tech/web3/brookfield.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
    href:'https://economictimes.indiatimes.com/spotlight/et_brookfield.cms',
  },
  {
    id: 8,
    title: 'ET Usv 2023',
    src: '/tech/web3/etUsv.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
    href:'https://economictimes.indiatimes.com/spotlight/et_usv/105923303.cms',
  },
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'ET Pwla 2023',
    src: '/tech/others/etpwla.png',
    exp: '1 year ago',
    snippetCount: 1128,
    progress: 90,
    href:'https://economictimes.indiatimes.com/spotlight/etpwla2023',
  },
  {
    id: 2,
    title: 'ET Antler 2023',
    src: '/tech/others/antler.png',
    exp: '1 year ago',
    snippetCount: 1128,
    progress: 70,
    href:'https://economictimes.indiatimes.com/spotlight/et_antler_next100.cms',
  },
  {
    id: 3,
    title: 'Crypto currency',
    src: '/tech/others/crypto.png',
    exp: '1 year ago',
    snippetCount: 1128,
    progress: 70,
    href:'https://economictimes.indiatimes.com/spotlight/cryptocurrency_crypto_academy/105209720.cms'
  },
  {
    id: 4,
    title: 'ET Circle 2023',
    src: '/tech/others/etcircle.png',
    exp: '1 year ago',
    snippetCount: 1128,
    progress: 70,
    href:'https://economictimes.indiatimes.com/spotlight/et_circle.cms'
  },
];

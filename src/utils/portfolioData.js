import { nanoid } from "nanoid";

export const workExperience = [
  {
    id: nanoid(),
    place: "Synlimite",
    title: "Frontend Developer",
    date: "March 2021 - Sept 2022",
    description:
      "Develop, maintain and update reactive UI components, create custom CSS styles, state management, pages and routing. ",
  },
  {
    id: nanoid(),
    place: "Studio Huella",
    title: "Web Designer",
    date: "March 2021 - March 2022",
    description:
      "Responsible for creating the visual design and layout of websites using HTML and CSS.",
  },
];

export const education = [
  {
    id: nanoid(),
    place: `Universidad Experimental de Los Llanos "Ezequiel Zamora"`,
    title: "Computer Engineer",
    date: "March 2020 - March 2025",
    description: "",
  },
  {
    id: nanoid(),
    place: `Unidad Educativa "San Judas Tadeo"`,
    title: "High School Graduate",
    date: "Sept. 2014 - June 2019",
    description: "",
  },
];

export const projectTags = [
  { id: nanoid(), name: "WEB DEV", colorScheme: "red" },
  { id: nanoid(), name: "DATA SCIENCE", colorScheme: "green" },
];

export const projects = [
  {
    id: nanoid(),
    name: "Albumino",
    cover_image: "https://i.imgur.com/VPMLeVU.png",
    description:
      " A fullstack app to create, share and upload albums & photos (Google Photos like). Created with Next.js 12, Next-Auth, MongoDB, Firebase & ChakraUI ",
    urls: {
      demo: "https://albumino.vercel.app",
      code: "https://github.com/bkfan1/albumino",
    },

    tags: [projectTags[0]],
  },
  {
    id: nanoid(),
    name: "Form Maker",
    cover_image: "https://i.imgur.com/w8pg1aN.png",
    description:
      " A fullstack app for creating and sharing online forms, with authentication system, created with NextJS, MongoDB & TailwindCSS ",
    urls: {
      demo: "https://form-maker.vercel.app/",
      code: "https://github.com/bkfan1/form-maker",
    },

    tags: [projectTags[0]],
  },
  {
    id: nanoid(),
    name: "Notella",
    cover_image: "https://i.imgur.com/nPgd2nN.png",
    description:
      " A fullstack taking notes app with authentication system and markdown support, created with Nextjs, MongoDB, JWT & TailwindCSS ",
    urls: {
      demo: "https://notella.vercel.app/login",
      code: "https://github.com/bkfan1/notella",
    },

    tags: [projectTags[0]],
  },
  {
    id: nanoid(),
    name: "Spotify User Analysis (EDA & ETL)",
    cover_image: "https://i.imgur.com/jsozQof.png",
    description:
      " ETL process and EDA of user top artists & tracks data in Spotify using Spotipy, Pandas, Airflow and Seaborn",
    urls: {
      demo: null,
      code: "https://github.com/bkfan1/spotify-user-analysis",
    },

    tags: [projectTags[1]],
  },
  {
    id: nanoid(),
    name: "Sticky Notes SPA",
    cover_image: "https://i.imgur.com/pf0ik7K.png",
    description:
      "A Single Page Application (SPA) for creating sticky notes that supports markdown code. Created with React and TailwindCSS",
    urls: {
      demo: "https://sticky-notes-app.vercel.app/",
      code: "https://github.com/bkfan1/sticky-notes-app",
    },

    tags: [projectTags[0]],
  },
  {
    id: nanoid(),
    name: "Geography Game",
    cover_image: "https://i.imgur.com/cEw1vzu.png",
    description: "Drag and drop geography game created with React and SASS",
    urls: {
      demo: "https://geography-class-minigame.vercel.app/",
      code: "https://github.com/bkfan1/geography-class-minigame",
    },

    tags: [projectTags[0]],
  },

  {
    id: nanoid(),
    name: "Hangman Game",
    cover_image: "https://i.imgur.com/O9P2wqZ.png",
    description:
      "The classic letter guessing game called Hangman implemented with React and Sass.",
    urls: {
      demo: "https://hangman-game-bk.vercel.app/",
      code: "https://github.com/bkfan1/hangman-game/",
    },

    tags: [projectTags[0]],
  },

  {
    id: nanoid(),
    name: "Guessing Words Game",
    cover_image: "https://i.imgur.com/DFfFLra.png",
    description: "Guessing words game created with React and TailwindCSS ",

    urls: {
      demo: "https://english-class-minigame.vercel.app/",
      code: "https://github.com/bkfan1/english-class-minigame",
    },

    tags: [projectTags[0]],
  },

  {
    id: nanoid(),
    name: "Pomodoro Timer",
    cover_image: "https://i.imgur.com/Hd925Qh.png",
    description:
      "Focus and get your stuff done with this Pomodoro Timer created with React and TailwindCSS",

    urls: {
      demo: "https://pomodoro-app-five-mu.vercel.app/",
      code: "https://github.com/bkfan1/pomodoro-app",
    },

    tags: [projectTags[0]],
  },
];
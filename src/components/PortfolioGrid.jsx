import {
  Button,
  ButtonGroup,
  HStack,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { nanoid } from "nanoid";
import useLocalPagination from "../hooks/useLocalPagination";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export const projectTags = [
  { id: nanoid(), name: "WEB DEV", colorScheme: "red" },
  { id: nanoid(), name: "DATA SCIENCE", colorScheme: "green" },
];

const projects = [
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
      demo: "https://hangman-game-bk.vercel.app/",
      code: "https://english-class-minigame.vercel.app/",
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

function createItemsUsingForLoop(num) {
  const items = [];
  for (let i = 1; i <= num; i++) {
    items.push(i);
  }
  return items;
}

export default function PortfolioGrid() {
  const {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
  } = useLocalPagination(projects, 6);

  const handleNextPage = () => {
    nextPage();
  };

  const handlePrevPage = () => {
    prevPage();
  };

  const handleGoToPage = (pageNumber) => {
    goToPage(pageNumber);
  };

  return (
    <>
      <VStack>
        <ButtonGroup width={"100%"} justifyContent={"space-between"}>
          <Button
            onClick={handlePrevPage}
            colorScheme="blue"
            variant={"ghost"}
            isDisabled={currentPage === 1}
            leftIcon={<BsChevronDoubleLeft
            />}
          >
            Prev page
          </Button>

          <Button
            onClick={handleNextPage}
            colorScheme="blue"
            isDisabled={currentPage === totalPages}
            rightIcon={<BsChevronDoubleRight/>}
          >
            Next page
          </Button>
        </ButtonGroup>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px">
          {paginatedData().map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </SimpleGrid>

        <HStack
          bgColor={"gray.100"}
          justifyContent={"center"}
          py={1}
          rounded={"lg"}
          w={100}
          spacing={4}
        >
          {createItemsUsingForLoop(totalPages).map((pageNumber) => (
            <Tooltip
              key={nanoid()}
              label={
                currentPage === pageNumber
                  ? `You're in page ${pageNumber}`
                  : `Go to page ${pageNumber}`
              }
            >
              <Link onClick={() => handleGoToPage(pageNumber)}>
                <Text
                  px={2}
                  rounded={"full"}
                  fontWeight={currentPage === pageNumber ? "bold" : ""}
                  color={currentPage === pageNumber ? "white" : "blue.500"}
                  bgColor={currentPage === pageNumber ? "blue.500" : ""}
                >
                  {pageNumber}
                </Text>
              </Link>
            </Tooltip>
          ))}
        </HStack>
      </VStack>
    </>
  );
}

import {
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import ProjectCard from "../cards/ProjectCard";
import { nanoid } from "nanoid";
import useLocalPagination from "../../hooks/useLocalPagination";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { projects } from "../../utils/portfolioData";


function createItemsUsingForLoop(num) {
  const items = [];
  for (let i = 1; i <= num; i++) {
    items.push(i);
  }
  return items;
}

export default function ProjectsGrid() {
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
        <ButtonGroup display={{base:"none", md:"flex"}} width={"100%"} justifyContent={"space-between"}>

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

        <ButtonGroup display={{base:"flex", md:"none"}} width={"100%"} justifyContent={"space-between"}>
        <IconButton onClick={handlePrevPage} isDisabled={currentPage === 1} icon={<BsChevronDoubleLeft/>} colorScheme="blue" variant={"ghost"} />

          <IconButton onClick={handleNextPage} isDisabled={currentPage === totalPages} icon={<BsChevronDoubleRight/>} colorScheme="blue" />
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

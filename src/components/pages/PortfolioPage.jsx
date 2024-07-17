import {
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Box,
  IconButton,
  useMediaQuery,
  HStack,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import ProjectCard from "../cards/ProjectCard";
import useLocalPagination from "../../hooks/useLocalPagination";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const MotionStack = motion(Stack);

function PortfolioPage() {
  const { t } = useTranslation();

  const projects = t(`projects`, { returnObjects: true });

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const itemsPerPage = isLargerThan1024 ? 3 : 2;

  const {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
  } = useLocalPagination(projects, itemsPerPage);

  return (
    <MotionStack
      direction={"column"}
      width={"100%"}
      height={"100%"}
      paddingX={{ base: 4, md: 10 }}
      paddingBottom={10}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <VStack alignItems={"start"} spacing={5}>
        <Heading textAlign={"left"} fontSize={{ base: "2xl", md: "4xl" }}>
          {t("titles.portfolio")}
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          accusantium unde quidem ipsum deserunt minima ex numquam architecto
          perferendis ducimus odio, molestiae itaque eaque saepe dolores at
          possimus hic fuga?
        </Text>
      </VStack>

      <Box position="relative" width="100%">
        <Box
          as={SimpleGrid}
          columns={{
            base: 3,
            sm: 1,
            md: 2,
            lg: paginatedData.length === 3 ? 3 : 2,
            xl: 3,
          }}
          spacing="20px"
          mt={5}
        >
          {paginatedData.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </Box>

        <IconButton
          position="absolute"
          top="50%"
          left="-10"
          fontSize={28}
          onClick={prevPage}
          isDisabled={currentPage === 1}
          hideBelow={"md"}
          size={"lg"}
          rounded={"full"}
          icon={<BiChevronLeft />}
        ></IconButton>

        <IconButton
          position="absolute"
          top="50%"
          right="-10"
          fontSize={28}
          hideBelow={"md"}
          onClick={nextPage}
          isDisabled={currentPage === totalPages}
          size={"lg"}
          rounded={"full"}
          icon={<BiChevronRight />}
        ></IconButton>

        <HStack justifyContent="center" mt={5} hideFrom={"md"}>
          <Button onClick={prevPage} isDisabled={currentPage === 1}>
            Prev
          </Button>
          <ButtonGroup>
            {[...Array(totalPages).keys()].map((page) => (
              <Button
                key={page}
                onClick={() => goToPage(page + 1)}
                variant={page + 1 === currentPage ? "solid" : "outline"}
              >
                {page + 1}
              </Button>
            ))}
          </ButtonGroup>
          <Button onClick={nextPage} isDisabled={currentPage === totalPages}>
            Next
          </Button>
        </HStack>
      </Box>
    </MotionStack>
  );
}

export default PortfolioPage;

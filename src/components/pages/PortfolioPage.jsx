import {
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { projects } from "../../utils/portfolioData";
import ProjectCard from "../cards/ProjectCard";
import useLocalPagination from "../../hooks/useLocalPagination";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MotionBox = motion(Box);

function PortfolioPage() {
  const {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
  } = useLocalPagination(projects, 3);

  return (
    <Stack
      direction={"column"}
      width={"100%"}
      height={"100%"}
      paddingX={{ base: 4, md: 10 }}
      paddingBottom={10}
    >
      <VStack alignItems={"start"} spacing={5}>
        <Heading textAlign={"left"} fontSize={{ base: "2xl", md: "4xl" }}>
          Portfolio
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          accusantium unde quidem ipsum deserunt minima ex numquam architecto
          perferendis ducimus odio, molestiae itaque eaque saepe dolores at
          possimus hic fuga?
        </Text>
      </VStack>

      <Box position="relative" width="100%">
        <MotionBox
          as={SimpleGrid}
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing="20px"
          mt={5}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {paginatedData.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </MotionBox>

        <IconButton
          position="absolute"
          top="50%"
          left="-10"
          fontSize={28}
          onClick={prevPage}
          isDisabled={currentPage === 1}
          size={"lg"}
          rounded={"full"}
          icon={<BiChevronLeft />}
        ></IconButton>

        <IconButton
          position="absolute"
          top="50%"
          right="-10"
          fontSize={28}
          onClick={nextPage}
          isDisabled={currentPage === totalPages}
          size={"lg"}
          rounded={"full"}
          icon={<BiChevronRight />}
        ></IconButton>
      </Box>
    </Stack>
  );
}

export default PortfolioPage;

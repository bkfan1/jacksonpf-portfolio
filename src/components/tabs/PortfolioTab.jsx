import { Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import ProjectsGrid from "../grids/ProjectsGrid";

export default function PortfolioTab() {
  return (
    <>
      <Flex flexDirection={"column"} minHeight={"100vh"} gap={4} px={16}>
        <VStack width={"100%"}>
          <Heading width={"100%"} textAlign={{ base: "center", sm: "left" }}>
            Portfolio
          </Heading>
          <Text width={"100%"} textAlign={{ base: "center", sm: "left" }}>
            Projects I would like to highlight
          </Text>
        </VStack>
        <Divider />
        <ProjectsGrid />
      </Flex>
    </>
  );
}

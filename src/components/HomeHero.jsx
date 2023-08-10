import {
  Avatar,
  Button,
  ButtonGroup,
  Heading,
  Highlight,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsChatTextFill } from "react-icons/bs";

export default function HomeHero() {
  return (
    <>
      <Stack
        alignContent={{ base: "center" }}
        direction={{ base: "column", md: "row" }}
        height={"fit-content"}
        p={4}
        mt={"44"}
        backgroundColor={{ base: "white", md: "transparent" }}
        border={{ base: "1px", md: "none" }}
        borderColor={{ base: "lightgray", md: "none" }}
        rounded={{ base: "md", md: "none" }}
        shadow={{ base: "md", md: "none" }}
        gap={4}
      >
        <Avatar
          src={"/jack.jpg"}
          size={"2xl"}
          alignSelf={{ base: "center", md: "initial" }}
          name="Jackson Paredes Ferranti"
          bg={"blue.500"}
          textColor={"white"}
        />

        <VStack textAlign={{ base: "center", md: "left" }}>
          <Heading width={"100%"}>Jackson Paredes Ferranti</Heading>
          <Heading size={"2xl"} width={"100%"} color={"blue.500"}>
            Web Developer
          </Heading>
          <Text
            display={{ base: "none", md: "initial" }}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            width={{ base: "sm", md: "lg" }}
            lineHeight={"8"}
          >
            <Highlight
              query={[
                "focused on creating solutions",
                "in backend and frontend",
              ]}
              styles={{
                px: 2,
                py: 1,
                rounded: "full",
                fontWeight: "bold",
                color: "white",
                bgColor: "blue.500",
              }}
            >
              A software developer focused on creating solutions using modern
              web technologies, both in backend and frontend.
            </Highlight>
          </Text>

          <ButtonGroup width={"100%"} size={{ base: "md", lg: "lg" }}>
            <Link
              width={{ base: "100%", md: "initial" }}
              href="mailto:jpf8296@gmail.com"
              isExternal
            >
              <Button
                rightIcon={<BsChatTextFill />}
                width={{ base: "100%", md: "initial" }}
                mt={{ base: "2" }}
                colorScheme="blue"
              >
                Contact me
              </Button>
            </Link>
          </ButtonGroup>
        </VStack>
      </Stack>
    </>
  );
}

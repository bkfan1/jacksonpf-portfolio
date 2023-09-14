import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Highlight,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsFillFileTextFill } from "react-icons/bs";
import TimelineStepper from "../steppers/TimelineStepper";

import { education, workExperience } from "../../utils/portfolioData";
export default function AboutTab() {
  return (
    <>
      <Flex flexDirection={"column"} minHeight={"100vh"} px={16}>
        <VStack width={"100%"} mb={6}>
          <Heading
            width={"100%"}
            textAlign={{ base: "center", md: "left" }}
            mb={2}
          >
            About me
          </Heading>
          <Stack width={"100%"} direction={{ base: "column", md: "row" }}>
            <Avatar
              src="/jack2.jpg"
              size={"2xl"}
              alignSelf={{ base: "center", md: "initial" }}
            />
            <VStack>
              <Text
                maxWidth={"2xl"}
                my={{ sm: 2 }}
                textAlign={"justify"}
                lineHeight={"7"}
              >
                <Highlight
                  query={[
                    "software developer",
                    "He is always passionate, curious",
                    "detail-oriented",
                  ]}
                  styles={{
                    px: 2,
                    py: 1,
                    rounded: "full",
                    fontWeight: "bold",
                    color: "white",
                    bg: "blue.500",
                  }}
                >
                  Jackson Paredes Ferranti is a software developer currently
                  focused on web development looking for opportunities to take his
                  career further in the IT industry. He is always passionate, curious, and
                  interested in computer science topics such as data science,
                  artificial intelligence, data structures, algorithms, and many
                  more. As a worker, he is detail-oriented and likes to explore
                  new ideas and approaches to get the job done.
                </Highlight>
              </Text>
              <ButtonGroup width={"100%"}>
                <Link href="/CV_JacksonParedesFerranti_2023.pdf" width={"100%"}>
                  <Button
                    colorScheme="green"
                    width={{ base: "100%", md: "initial" }}
                    leftIcon={<BsFillFileTextFill />}
                  >
                    Download CV
                  </Button>
                </Link>
              </ButtonGroup>
            </VStack>
          </Stack>
        </VStack>
        <Divider />

        <VStack width={"100%"} my={6}>
          <Heading
            width={"100%"}
            textAlign={{ base: "center", md: "left" }}
            mb={2}
          >
            Education
          </Heading>
          <TimelineStepper timelineData={education} type={"education"} />
        </VStack>

        <Divider />

        <VStack width={"100%"} my={6}>
          <Heading
            width={"100%"}
            textAlign={{ base: "center", md: "left" }}
            mb={2}
          >
            Work Experience
          </Heading>
          <TimelineStepper timelineData={workExperience} type={"work"} />
        </VStack>
      </Flex>
    </>
  );
}

import {
  Avatar,
  Button,
  ButtonGroup,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  Highlight,
  Icon,
  Link,
  SimpleGrid,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import PortfolioGrid from "./components/PortfolioGrid";
import {
  BsAwardFill,
  BsBriefcaseFill,
  BsEnvelope,
  BsFillFileTextFill,
  BsGearFill,
  BsGithub,
  BsHouseFill,
  BsJournalBookmarkFill,
  BsLinkedin,
  BsPersonVcardFill,
  BsPhone,
} from "react-icons/bs";
import MediaButton from "./components/MediaButton";
import { nanoid } from "nanoid";
import TimelineStepper from "./components/TimelineStepper";
import useIsMounted from "./hooks/useIsMounted";
import HomeHero from "./components/HomeHero";

const workExperience = [
  {
    id: nanoid(),
    place: "Synlimite",
    title: "Frontend Developer",
    date: "March 2021 - Sept 2022",
    icon: <BsGearFill />,
    description:
      "Develop, maintain and update reactive UI components, create custom CSS styles, state management, pages and routing. ",
  },
  {
    id: nanoid(),
    place: "Studio Huella",
    title: "Web Designer",
    date: "March 2021 - March 2022",
    icon: <BsGearFill />,
    description:
      "Responsible for creating the visual design and layout of websites using HTML and CSS.",
  },
];

const education = [
  {
    id: nanoid(),
    place: `Universidad Experimental de Los Llanos "Ezequiel Zamora"`,
    title: "Computer Engineer",
    icon: <BsAwardFill />,
    date: "March 2020 - March 2025",
    description: "",
  },
  {
    id: nanoid(),
    place: `Unidad Educativa "San Judas Tadeo"`,
    title: "High School Graduate",
    icon: <BsAwardFill />,
    date: "Sept. 2014 - June 2019",
    description: "",
  },
];

function App() {
  const { isMounted } = useIsMounted();

  return (
    <>
      <ChakraProvider>
        {isMounted ? (
          <>
            <Tabs align={"end"} variant={"enclosed"}>
              <TabList px={2} pt={2}>
                <Tab>
                  <Icon as={BsHouseFill} />
                  <Text display={{ base: "none", md: "flex" }} ml={2}>
                    Home
                  </Text>
                </Tab>
                <Tab>
                  <Icon as={BsPersonVcardFill} />
                  <Text display={{ base: "none", md: "flex" }} ml={2}>
                    About
                  </Text>
                </Tab>
                <Tab>
                  <Icon as={BsBriefcaseFill} />
                  <Text display={{ base: "none", md: "flex" }} ml={2}>
                    Portfolio
                  </Text>
                </Tab>
                <Tab>
                  <Icon as={BsJournalBookmarkFill} />
                  <Text display={{ base: "none", md: "flex" }} ml={2}>
                    Contact
                  </Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel
                  backgroundImage={`url(/polygon.svg)`}
                  backgroundRepeat={"no-repeat"}
                  backgroundPosition={{ base: "top", md: "revert" }}
                  backgroundSize={"cover"}
                >
                  <Flex minHeight={"100vh"} justifyContent={"center"}>
                    <HomeHero />
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex flexDirection={"column"} minHeight={"100vh"} px={16}>
                    <VStack width={"100%"} mb={6}>
                      <Heading
                        width={"100%"}
                        textAlign={{ base: "center", md: "left" }}
                      >
                        About me
                      </Heading>
                      <Stack
                        width={"100%"}
                        direction={{ base: "column", md: "row" }}
                      >
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
                          >
                            <Highlight
                              query={[
                                "software developer",
                                "always passionate, curious",
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
                              Jackson Paredes Ferranti is a software developer
                              currently focused on web development, but he plans
                              to advance his career by learning data science and
                              becoming a Data Engineer. He is always passionate,
                              curious, and interested in computer science topics
                              such as data science, artificial intelligence,
                              data structures, algorithms, and many more. As a
                              worker, he is detail-oriented and likes to explore
                              new ideas and approaches to get the job done.
                            </Highlight>
                          </Text>
                          <ButtonGroup width={"100%"}>
                            <Link
                              href="/CV_JacksonParedesFerranti_2023.pdf"
                              width={"100%"}
                            >
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
                        textAlign={{ base: "center", md: "right" }}
                      >
                        Education
                      </Heading>
                      <TimelineStepper timelineData={education} />
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
                      <TimelineStepper timelineData={workExperience} />
                    </VStack>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex
                    flexDirection={"column"}
                    minHeight={"100vh"}
                    gap={4}
                    px={16}
                  >
                    <VStack width={"100%"}>
                      <Heading width={"100%"}>Portfolio</Heading>
                      <Text width={"100%"}>
                        Projects I would like to highlight
                      </Text>
                    </VStack>
                    <Divider />
                    <PortfolioGrid />
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex width={"100%"} minHeight={"100vh"}>
                    <VStack margin={"auto"} spacing={8}>
                      <Heading>You can reach me on:</Heading>
                      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={6}>
                        <MediaButton
                          icon={BsEnvelope}
                          username={"jpf8296@gmail.com"}
                          link={"mailto:jpf8296@gmail.com"}
                        />
                        <MediaButton
                          icon={BsPhone}
                          username={"+584243529011"}
                          link={"https://wa.link/4burb4"}
                        />
                        <MediaButton
                          icon={BsLinkedin}
                          username={"linkedin.com/in/jacksonpf"}
                          link={"https://www.linkedin.com/in/jacksonpf1"}
                        />

                        <MediaButton
                          icon={BsGithub}
                          username={"bkfan1"}
                          link={"https://www.github.com/bkfan1"}
                        />
                      </SimpleGrid>
                    </VStack>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Divider />
            <Flex py={4} alignItems={"center"} justifyContent={"center"}>
              <Text>
                <Highlight
                  query={"Jackson Paredes Ferranti"}
                  styles={{ color: "blue.500", fontWeight: "bold" }}
                >
                  Created by Jackson Paredes Ferranti 👨‍💻
                </Highlight>
              </Text>
            </Flex>
          </>
        ) : (
          <>
            <Flex
              minHeight={"100vh"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Spinner size={"xl"} color="blue.500" />
            </Flex>
          </>
        )}
      </ChakraProvider>
    </>
  );
}

export default App;

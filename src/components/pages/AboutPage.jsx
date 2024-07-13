import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  IconButton,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import JackoImage from "../../assets/jacko1.jpg";
import TimelineStepper from "../steppers/TimelineStepper";
import { education, workExperience } from "../../utils/portfolioData";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function AboutPage() {
  return (
    <>
      <Stack
        direction={{ base: "row", lg: "row", md: "column", sm: "column" }}
        width={"full"}
        height={"100%"}
        alignItems={{ base: "start", sm: "center", md: "start" }}
        paddingX={10}
        gap={10}
      >
        <Box
          display={{
            base: "initial",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "initial",
          }}
          boxSize={"sm"}
        >
          <Image
            src={JackoImage}
            objectFit='cover'
            alt="Picture of Jackson Paredes Ferranti"
            boxSize={"140px"}
            rounded={"full"}
          />

          <VStack marginY={2}>
            <Heading width={"full"} size={"md"} textAlign={"left"}>
              Jackson Paredes Ferranti
            </Heading>

            <Button width={"full"}>Download CV</Button>

            <ButtonGroup width={"full"}>
              <IconButton icon={<BsGithub />} />
              <IconButton icon={<BsLinkedin />} />
            </ButtonGroup>
          </VStack>
        </Box>

        <Stack spacing={8}>
          <VStack>
            <Heading width={"100%"} textAlign={"left"}>
              About me
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              quia, doloribus esse laborum ratione iste animi corrupti nobis
              adipisci placeat illo quam reiciendis architecto alias ducimus
              necessitatibus repellat omnis. Consequuntur.
            </Text>
            <Divider />
          </VStack>

          <VStack>
            <Heading width={"100%"} textAlign={"left"} marginBottom={2}>
              Experience
            </Heading>
            <TimelineStepper timelineData={workExperience} type={"work"} />
            <Divider />
          </VStack>

          <VStack>
            <Heading width={"100%"} textAlign={"left"} marginBottom={2}>
              Education
            </Heading>
            <TimelineStepper timelineData={education} type={"education"} />
          </VStack>
        </Stack>
      </Stack>
    </>
  );
}

export default AboutPage;

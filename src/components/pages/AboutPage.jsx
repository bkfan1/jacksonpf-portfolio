import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Highlight,
  IconButton,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import JackoImage from "../../assets/jacko1.jpg";
import TimelineStepper from "../steppers/TimelineStepper";
import {
  contactData,
  education,
  workExperience,
} from "../../utils/portfolioData";
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";
import { IoDocumentAttach } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionStack = motion(Stack);

function AboutPage() {
  const { t, i18n } = useTranslation();

  const wordsToHighlight =
    i18n.language === "en"
      ? [
          "software developer",
          "2 years of experience",
          "proactive",
          "curious",
          "detail-oriented",
          "develop amazing solutions and products",
        ]
      : [];

  return (
    <>
      <MotionStack
        direction={{ base: "row", lg: "row", md: "column", sm: "column" }}
        width={"full"}
        height={"100%"}
        alignItems={{ base: "start", sm: "center", md: "start" }}
        paddingX={10}
        gap={10}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
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
            objectFit="cover"
            alt="Picture of Jackson Paredes Ferranti"
            boxSize={"140px"}
            rounded={"full"}
            border={"4px"}
            borderColor={"white"}
          />

          <VStack marginY={2}>
            <Heading width={"full"} size={"md"} textAlign={"left"}>
              Jackson Paredes Ferranti
            </Heading>

            <Heading size={"md"} width={"full"} textAlign={"left"}>
              {t("hero.role")}
            </Heading>

            <List width={"full"}>
              <ListItem>
                <ListIcon as={FaLocationDot} />
                Venezuela
              </ListItem>
            </List>

            <Button
              width={"full"}
              colorScheme="green"
              alignSelf={"start"}
              leftIcon={<IoDocumentAttach />}
            >
              {t("buttons.downloadCv")}
            </Button>

            <ButtonGroup width={"full"}>
              <Tooltip label={contactData.email}>
                <Link href={`mailto:${contactData.email}`}>
                  <IconButton icon={<BsEnvelopeFill />} />
                </Link>
              </Tooltip>

              <Tooltip label={contactData.phone}>
                <Link href={`tel:${contactData.phone}`}>
                  <IconButton icon={<BsTelephoneFill />} />
                </Link>
              </Tooltip>

              <Tooltip label="bkfan1">
                <Link isExternal href="https://github.com/bkfan1">
                  <IconButton icon={<BsGithub />} />
                </Link>
              </Tooltip>

              <Tooltip label="jacksonpf1">
                <Link isExternal href="https://linkedin.com/in/jacksonpf1">
                  <IconButton icon={<BsLinkedin />} />
                </Link>
              </Tooltip>
            </ButtonGroup>
          </VStack>
        </Box>

        <Stack spacing={8}>
          <VStack>
            <Heading width={"100%"} textAlign={"left"}>
              {t("titles.about")}
            </Heading>
            <Text width={"100%"}>{t("about.part1")}</Text>

            <Text width={"100%"}>{t("about.part2")}</Text>

            <Text width={"100%"}>{t("about.part3")}</Text>

            <Button
              hideFrom={"xl"}
              colorScheme="green"
              alignSelf={"start"}
              leftIcon={<IoDocumentAttach />}
            >
              {t("buttons.downloadCv")}
            </Button>
            <Divider />
          </VStack>

          <VStack>
            <Heading width={"100%"} textAlign={"left"} marginBottom={2}>
              {t("titles.experience")}
            </Heading>
            <TimelineStepper timelineData={workExperience} type={"work"} />
            <Divider />
          </VStack>

          <VStack>
            <Heading width={"100%"} textAlign={"left"} marginBottom={2}>
              {t("titles.education")}
            </Heading>
            <TimelineStepper timelineData={education} type={"education"} />
          </VStack>
        </Stack>
      </MotionStack>
    </>
  );
}

export default AboutPage;

import {
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  StackDivider,
  StackItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import JackoImage from "../../assets/jacko1.jpg";
import { BsEnvelopeFill, BsPlusCircle, BsTelephoneFill } from "react-icons/bs";
import { contactData } from "../../utils/portfolioData";
import { useTranslation } from "react-i18next";
import { IoDocumentAttach } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

function IndexPage() {
  const { t } = useTranslation();
  return (
    <>
      <Stack
        direction={{ md: "column-reverse", lg: "row" }}
        width={"100%"}
        alignItems={"center"}
        paddingX={10}
        spacing={20}
      >
        <MotionVStack
          as={"header"}
          width={{
            base: "xl",
            sm: "initial",
            md: "full",
            lg: "xl",
            xl: "xl",
          }}
          marginTop={20}
          initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
          <VStack alignItems={"start"}>
            <Heading size={"lg"}>👋 {t("hero.greet")}</Heading>
            <Heading size={"4xl"}>{t("hero.whoaim")}</Heading>

            <HStack placeItems={"center"}>
              <Heading size={"2xl"} my={2} color="lightgreen">
                {t("hero.role")}
              </Heading>
              <Icon as={FaCode} boxSize={"50px"} color={"lightgreen"} />
            </HStack>

            <Text fontSize={"large"} maxWidth={"xl"}>
              {t("hero.description")}
            </Text>

            <ButtonGroup mt={4} spacing={4}>
              <Button
                size={"lg"}
                colorScheme="green"
                leftIcon={<IoDocumentAttach />}
              >
                {t("buttons.downloadCv")}
              </Button>
              <NavLink to={"/about"}>
                <Button
                  size={"lg"}
                  variant={"outline"}
                  leftIcon={<BsPlusCircle />}
                >
                  {t("buttons.knowMore")}
                </Button>
              </NavLink>
            </ButtonGroup>
          </VStack>
          <Divider my={4} backgroundColor={"gray.200"} />

          <HStack
            width={"100%"}
            divider={<StackDivider borderColor={"gray.200"} />}
            gap={4}
          >
            <StackItem flex={1}>
              <HStack>
                <Icon as={BsEnvelopeFill} boxSize={6} />
                <VStack>
                  <Heading size={"lg"} width={"full"}>
                    {t("titles.email")}
                  </Heading>
                  <Text width={"full"}>{contactData.email}</Text>
                </VStack>
              </HStack>
            </StackItem>

            <StackItem flex={1}>
              <HStack>
                <Icon as={BsTelephoneFill} boxSize={6} />
                <VStack>
                  <Heading size={"lg"} width={"full"}>
                    {t("titles.phone")}
                  </Heading>
                  <Text width={"full"}>{contactData.phone}</Text>
                </VStack>
              </HStack>
            </StackItem>
          </HStack>
        </MotionVStack>

        <MotionImage
          src={JackoImage}
          display={{
            base: "initial",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "initial",
          }}
          boxSize={"sm"}
          objectFit="cover"
          rounded={"full"}
          alt="Picture of Jackson Paredes Ferranti"
          border={"4px"}
          borderColor={"white"}
          initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
        />
      </Stack>
    </>
  );
}

export default IndexPage;

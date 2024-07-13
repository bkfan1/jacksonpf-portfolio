import {
  Box,
  Button,
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
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { contactData } from "../../utils/portfolioData";

function IndexPage() {
  return (
    <>
      <Stack
        direction={{ md: "column-reverse", lg: "row" }}
        width={"100%"}
        alignItems={"center"}
        paddingX={10}
        spacing={20}
      >
        <VStack
          as={"header"}
          width={{
            base: "xl",
            sm: "initial",
            md: "initial",
            lg: "2xl",
            xl: "xl",
          }}
          marginTop={20}
        >
          <VStack alignItems={"start"}>
            <Heading size={"lg"}>👋 Hey there!</Heading>
            <Heading size={"4xl"}>{`I'm Jackson Paredes Ferranti`}</Heading>
            <Heading size={"2xl"} my={4}>Web Developer</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              explicabo tempora distinctio provident error facilis, adipisci
              impedit. Voluptatum quas aut ipsam doloremque velit minus vel sit,
              et, accusantium exercitationem quidem!
            </Text>
            <Button
              size={"lg"}
              width={{ sm: "full", md: "md", lg: "md", xl: "initial" }}
              mt={2}
            >
              Hire Me
            </Button>
          </VStack>
          <Divider margin={6} backgroundColor={"gray.200"} />

          <HStack
            width={"100%"}
            divider={<StackDivider borderColor={"gray.200"} />}
            gap={4}
          >
            <StackItem flex={1}>
              <HStack>
              <Icon as={BsEnvelopeFill} boxSize={6}  />
              <VStack>
                <Heading size={"lg"} width={"full"}>
                  Email
                </Heading>
                <Text width={"full"}>{contactData.email}</Text>
              </VStack>
              </HStack>
              
            </StackItem>

            <StackItem flex={1}>
            <HStack>
              <Icon as={BsTelephoneFill} boxSize={6}  />
              <VStack>
                <Heading size={"lg"} width={"full"}>
                  Phone
                </Heading>
                <Text width={"full"}>{contactData.phone}</Text>
              </VStack>
              </HStack>
            </StackItem>
          </HStack>
        </VStack>

        <Image
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
          
        />
      </Stack>
    </>
  );
}

export default IndexPage;

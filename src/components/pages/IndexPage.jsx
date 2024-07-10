import {
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  StackItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import JackoImage from "../../assets/jacko1.jpg";

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
            <Heading size={"lg"}>Hey there!</Heading>
            <Heading size={"4xl"}>{`I'm Jackson Paredes Ferranti`}</Heading>
            <Heading>Web Developer</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              explicabo tempora distinctio provident error facilis, adipisci
              impedit. Voluptatum quas aut ipsam doloremque velit minus vel sit,
              et, accusantium exercitationem quidem!
            </Text>
            <Button
              size={"lg"}
              width={{ sm: "full", md: "md", lg: "md", xl:"initial" }}
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
              <VStack>
                <Heading size={"lg"} width={"full"}>
                  Email
                </Heading>
                <Text width={"full"}>jacko@ve.com</Text>
              </VStack>
            </StackItem>

            <StackItem flex={1}>
              <VStack>
                <Heading size={"lg"} width={"full"}>
                  Phone
                </Heading>
                <Text width={"full"}>+584245329011</Text>
              </VStack>
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
          boxSize={{base:"lg", lg:"md"}}
          objectFit="contain"
          alt="Picture of Jackson Paredes Ferranti"
        />
      </Stack>
    </>
  );
}

export default IndexPage;

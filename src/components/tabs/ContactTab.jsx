import { Flex, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import { BsEnvelope, BsGithub, BsLinkedin, BsPhone } from "react-icons/bs";
import MediaButton from "../buttons/MediaButton";

export default function ContactTab() {
  return (
    <>
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
    </>
  );
}

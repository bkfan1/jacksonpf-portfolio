import {
  ButtonGroup,
  Heading,
  IconButton,
  Link,
  VStack,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

function ContactPage() {
  return (
    <>
      <ButtonGroup>
        <VStack>
          <Link>
            <IconButton icon={<BsGithub/>} size={"lg"} />
            <Heading>bkfan1</Heading>
          </Link>
        </VStack>

        <VStack>
          <Link>
            <IconButton icon={<BsGithub/>} size={"lg"} />
            <Heading>LinkedIn</Heading>
          </Link>
        </VStack>
      </ButtonGroup>
    </>
  );
}

export default ContactPage;

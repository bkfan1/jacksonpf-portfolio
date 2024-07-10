import { Flex, Text, VStack } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <VStack
        id="socialMediaContainer"
        position={"fixed"}
        gap={4}
        fontSize={"2xl"}
        zIndex={99}
        right={0}

        background={"gray.200"}
        padding={4}
        height={"fit-content"}
        rounded={"md"}
      >
        <Link isExternal>
          <FaGithub />
        </Link>

        <Link isExternal>
          <BsLinkedin />
        </Link>
      </VStack>
    </>
  );
}

export default Sidebar;

import { Flex, Icon } from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";

export default function ProjectImagePlaceHolder() {
  return (
    <>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
        backgroundColor={"#edf2f7"}
      >
        <Icon as={BsCodeSlash} boxSize={"12"} color={"gray.600"} />
      </Flex>
    </>
  );
}

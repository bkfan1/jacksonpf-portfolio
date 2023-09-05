import { Flex, Spinner } from "@chakra-ui/react";

export default function LoadingScreen() {
  return (
    <>
      <Flex minHeight={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Spinner size={"xl"} color="blue.500" />
      </Flex>
    </>
  );
}

import { Flex, Highlight, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex py={4} alignItems={"center"} justifyContent={"center"}>
        <Text>
          <Highlight
            query={"Jackson Paredes Ferranti"}
            styles={{ color: "blue.500", fontWeight: "bold" }}
          >
            Created by Jackson Paredes Ferranti 👨‍💻
          </Highlight>
        </Text>
      </Flex>
    </>
  );
}

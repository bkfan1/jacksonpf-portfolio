import { Flex, Icon, Link, Text } from "@chakra-ui/react";

export default function MediaButton({ icon, username, link }) {
  return (
    <>
      <Link href={link} isExternal>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <Icon as={icon} boxSize={12} color={"blue.500"} />
          <Text>{username}</Text>
        </Flex>
      </Link>
    </>
  );
}
